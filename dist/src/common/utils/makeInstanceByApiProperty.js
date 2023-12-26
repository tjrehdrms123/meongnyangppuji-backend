"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInstanceByApiProperty = void 0;
const DECORATORS_PREFIX = 'swagger';
const API_MODEL_PROPERTIES = `${DECORATORS_PREFIX}/apiModelProperties`;
const API_MODEL_PROPERTIES_ARRAY = `${DECORATORS_PREFIX}/apiModelPropertiesArray`;
function isObject(value) {
    const type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    return true;
}
function isLazyTypeFunc(type) {
    return isFunction(type) && type.name == 'type';
}
function isPrimitiveType(type) {
    return (typeof type === 'function' &&
        [String, Boolean, Number].some(item => item === type));
}
function checkType(object) {
    return object;
}
function makeInstanceByApiProperty(dtoClass, generic) {
    const mappingDto = {};
    const propertiesArray = Reflect.getMetadata(API_MODEL_PROPERTIES_ARRAY, dtoClass.prototype) || [];
    const properties = propertiesArray.map(field => {
        const fieldName = field.substring(1);
        const obj = Reflect.getMetadata(API_MODEL_PROPERTIES, dtoClass.prototype, fieldName);
        obj.fieldName = fieldName;
        return obj;
    });
    for (const property of properties) {
        const propertyType = property.type;
        if (propertyType) {
            if (propertyType === 'generic') {
                if (generic) {
                    if (property.isArray) {
                        mappingDto[property.fieldName] = [
                            makeInstanceByApiProperty(generic)
                        ];
                    }
                    else {
                        mappingDto[property.fieldName] = makeInstanceByApiProperty(generic);
                    }
                }
            }
            else if (propertyType === 'string') {
                if (typeof property.example !== 'undefined') {
                    mappingDto[property.fieldName] = property.example;
                }
                else {
                    mappingDto[property.fieldName] = property.description;
                }
            }
            else if (propertyType === 'number') {
                if (typeof property.example !== 'undefined') {
                    mappingDto[property.fieldName] = property.example;
                }
                else {
                    mappingDto[property.fieldName] = property.description;
                }
            }
            else if (isPrimitiveType(propertyType)) {
                if (typeof property.example !== 'undefined') {
                    mappingDto[property.fieldName] = property.example;
                }
                else {
                    mappingDto[property.fieldName] = property.description;
                }
            }
            else if (isLazyTypeFunc(propertyType)) {
                const constructorType = propertyType();
                if (Array.isArray(constructorType)) {
                    mappingDto[property.fieldName] = [
                        makeInstanceByApiProperty(constructorType[0])
                    ];
                }
                else if (property.isArray) {
                    mappingDto[property.fieldName] = [
                        makeInstanceByApiProperty(constructorType)
                    ];
                }
                else {
                    mappingDto[property.fieldName] =
                        makeInstanceByApiProperty(constructorType);
                }
            }
            else if (checkType(propertyType)) {
                if (property.isArray) {
                    mappingDto[property.fieldName] = [
                        makeInstanceByApiProperty(propertyType)
                    ];
                }
                else {
                    mappingDto[property.fieldName] =
                        makeInstanceByApiProperty(propertyType);
                }
            }
        }
    }
    return mappingDto;
}
exports.makeInstanceByApiProperty = makeInstanceByApiProperty;
//# sourceMappingURL=makeInstanceByApiProperty.js.map