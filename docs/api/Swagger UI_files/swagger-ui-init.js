
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/": {
        "get": {
          "operationId": "AppController_getRoot",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/animal_type": {
        "post": {
          "operationId": "AnimalTypeController_createAnimalType",
          "summary": "반려동물 타입 생성",
          "description": "반려동물 타입 생성",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateAnimalTypeDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResAnimalTypeDto"
                      }
                    ]
                  },
                  "examples": {
                    "애완동물 타입 생성 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "name": "강아지",
                          "detail_name": "진돗개"
                        }
                      },
                      "description": "애완동물 타입 생성 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Animal Type - 1000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "동일한 반려 동물의 상세 이름이 존재합니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-1000"
                        }
                      },
                      "description": "동일한 반려 동물의 상세 이름이 존재합니다."
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "animal_type API"
          ]
        },
        "patch": {
          "operationId": "AnimalTypeController_updateAnimalTypeByDetailName",
          "summary": "반려동물 타입 내용 변경",
          "description": "반려동물 타입 내용 변경",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateAnimalTypeByDetailNameDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": []
                  },
                  "examples": {}
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "animal_type API"
          ]
        }
      },
      "/animal_type/name": {
        "get": {
          "operationId": "AnimalTypeController_getAnimalTypeName",
          "summary": "반려동물 타입 종류 조회",
          "description": "반려동물 타입 종류 조회",
          "parameters": [],
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResAnimalTypeNameDto"
                      }
                    ]
                  },
                  "examples": {
                    "애완동물 타입 종류 조회 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "name": [
                            "고양이",
                            "강아지"
                          ]
                        }
                      },
                      "description": "애완동물 타입 종류 조회 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "animal_type API"
          ]
        },
        "delete": {
          "operationId": "AnimalTypeController_deleteAnimalByName",
          "summary": "반려동물 이름으로 삭제",
          "description": "반려동물 이름으로 삭제",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteAnimalTypeNameDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResAnimalTypeManyRowDto"
                      }
                    ]
                  },
                  "examples": {
                    "반려동물 이름으로 삭제 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "row": 3
                        }
                      },
                      "description": "반려동물 이름으로 삭제 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "animal_type API"
          ]
        }
      },
      "/animal_type/detail_name": {
        "get": {
          "operationId": "AnimalTypeController_getAnimalTypeByDetailName",
          "summary": "반려동물 타입 상세 이름 조회",
          "description": "반려동물 타입 상세 이름 조회",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAnimalTypeByDetailNameDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResAnimalTypeDetailNameDto"
                      }
                    ]
                  },
                  "examples": {
                    "애완동물 상세 이름 조회 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "detail_name": [
                            "귀여운 고양이",
                            "머진 고양이",
                            "이뿌니 고양이",
                            "나 화남 고양이"
                          ]
                        }
                      },
                      "description": "애완동물 상세 이름 조회 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Animal Type - 1000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "동일한 반려 동물의 상세 이름이 존재합니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-1000"
                        }
                      },
                      "description": "동일한 반려 동물의 상세 이름이 존재합니다."
                    },
                    "BadRequest - ID 존재 하지 않음": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 ID가 존재 하지 않습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-0005"
                        }
                      },
                      "description": "해당 ID가 존재 하지 않습니다."
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "animal_type API"
          ]
        },
        "delete": {
          "operationId": "AnimalTypeController_deleteAnimalTypeByDetailName",
          "summary": "반려동물 상세 이름으로 삭제",
          "description": "반려동물 상세 이름으로 삭제",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteAnimalTypeByDetailNameDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResAnimalTypeDto"
                      }
                    ]
                  },
                  "examples": {
                    "애완동물 타입 내용 변경 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "name": "강아지",
                          "detail_name": "진돗개"
                        }
                      },
                      "description": "애완동물 타입 내용 변경 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "animal_type API"
          ]
        }
      },
      "/guardian": {
        "post": {
          "operationId": "GuardianController_createAnimalType",
          "summary": "보호자 생성",
          "description": "보호자 생성",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateGuardianDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResGuardianDto"
                      }
                    ]
                  },
                  "examples": {
                    "보호자 생성 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "name": "홍길동",
                          "phone_number": "010-1234-1234"
                        }
                      },
                      "description": "보호자 생성 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "guardian API"
          ]
        },
        "put": {
          "operationId": "GuardianController_updateAnimalType",
          "summary": "보호자 수정",
          "description": "보호자 수정",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateGuardianDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResGuardianDto"
                      }
                    ]
                  },
                  "examples": {
                    "보호자 업데이트 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "name": "홍길동",
                          "phone_number": "010-1234-1234"
                        }
                      },
                      "description": "보호자 업데이트 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Guardian - 2000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 보호자가 존재하지 않습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-2000"
                        }
                      },
                      "description": "해당 보호자가 존재하지 않습니다."
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "guardian API"
          ]
        },
        "delete": {
          "operationId": "GuardianController_deleteAnimalType",
          "summary": "보호자 삭제",
          "description": "보호자 삭제",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteGuardianDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResGuardianRowDto"
                      }
                    ]
                  },
                  "examples": {
                    "보호자 삭제 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "row": 1
                        }
                      },
                      "description": "보호자 삭제 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Guardian - 2000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 보호자가 존재하지 않습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-2000"
                        }
                      },
                      "description": "해당 보호자가 존재하지 않습니다."
                    }
                  }
                }
              },
              "description": ""
            },
            "401": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Unauthorized - 권한 부족": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 사용자는 권한이 부족합니다.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0001"
                        }
                      },
                      "description": "해당 사용자는 권한이 부족합니다."
                    },
                    "Unauthorized - 접근 불가": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인 후 이용해주세요.",
                          "statusCode": 401,
                          "message": "UnauthorizedException",
                          "code": "ERROR-0002"
                        }
                      },
                      "description": "로그인 후 이용해주세요."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "guardian API"
          ]
        }
      },
      "/users": {
        "post": {
          "operationId": "UsersController_createUsers",
          "summary": "유저 회원가입",
          "description": "유저 회원가입",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUsersDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResUsersTypeDto"
                      }
                    ]
                  },
                  "examples": {
                    "유저 회원가입 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "user_id": "develop",
                          "password": "1234",
                          "consent_check": true,
                          "privacy_policy_check": true,
                          "guardian_id": {
                            "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
                            "createdAt": "2023-07-27T07:58:16.235Z",
                            "updatedAt": "2023-07-27T07:58:16.235Z",
                            "deletedAt": null,
                            "name": "강길동",
                            "phone_number": "010-1234-1234"
                          }
                        }
                      },
                      "description": "유저 회원가입 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Users - 3000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "동일한 회원 이름이 존재합니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-3000"
                        }
                      },
                      "description": "동일한 회원 이름이 존재합니다."
                    },
                    "Users - 3003": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "동일한 보호자를 가진 계정이 존재합니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-3003"
                        }
                      },
                      "description": "동일한 보호자를 가진 계정이 존재합니다."
                    },
                    "Guardian - 2000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 보호자가 존재하지 않습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-2000"
                        }
                      },
                      "description": "해당 보호자가 존재하지 않습니다."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "users API"
          ]
        },
        "get": {
          "operationId": "UsersController_getCurrentUser",
          "summary": "유저 조회",
          "description": "유저 조회",
          "parameters": [],
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResUsersTypeDto"
                      }
                    ]
                  },
                  "examples": {
                    "유저 조회 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "user_id": "develop",
                          "password": "1234",
                          "consent_check": true,
                          "privacy_policy_check": true,
                          "guardian_id": {
                            "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
                            "createdAt": "2023-07-27T07:58:16.235Z",
                            "updatedAt": "2023-07-27T07:58:16.235Z",
                            "deletedAt": null,
                            "name": "강길동",
                            "phone_number": "010-1234-1234"
                          }
                        }
                      },
                      "description": "유저 조회 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Users - 3000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "동일한 회원 이름이 존재합니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-3000"
                        }
                      },
                      "description": "동일한 회원 이름이 존재합니다."
                    },
                    "Users - 3003": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "동일한 보호자를 가진 계정이 존재합니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-3003"
                        }
                      },
                      "description": "동일한 보호자를 가진 계정이 존재합니다."
                    },
                    "Guardian - 2000": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "해당 보호자가 존재하지 않습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-2000"
                        }
                      },
                      "description": "해당 보호자가 존재하지 않습니다."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "users API"
          ]
        }
      },
      "/users/login": {
        "post": {
          "operationId": "UsersController_logIn",
          "summary": "유저 로그인 성공",
          "description": "유저 로그인 성공",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/SuccessCommonResponseDto"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/ResUsersTypeDto"
                      }
                    ]
                  },
                  "examples": {
                    "유저 로그인 성공 예시": {
                      "value": {
                        "success": "성공여부",
                        "data": {
                          "id": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
                          "createdAt": "2023-07-13T06:28:32.525Z",
                          "updatedAt": "2023-07-13T06:28:32.525Z",
                          "user_id": "develop",
                          "password": "1234",
                          "consent_check": true,
                          "privacy_policy_check": true,
                          "guardian_id": {
                            "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
                            "createdAt": "2023-07-27T07:58:16.235Z",
                            "updatedAt": "2023-07-27T07:58:16.235Z",
                            "deletedAt": null,
                            "name": "강길동",
                            "phone_number": "010-1234-1234"
                          }
                        }
                      },
                      "description": "유저 로그인 성공 예시"
                    }
                  }
                }
              },
              "description": ""
            },
            "400": {
              "content": {
                "application/json": {
                  "schema": {
                    "additionalProperties": {
                      "$ref": "#/components/schemas/ErrorCommonResponse"
                    },
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/HttpExceptionErrorResponseDto"
                      }
                    ]
                  },
                  "examples": {
                    "Users - 3001": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "회원이 존재하지 않습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-3001"
                        }
                      },
                      "description": "회원이 존재하지 않습니다."
                    },
                    "Users - 3002": {
                      "value": {
                        "timestamp": "에러 발생시간",
                        "path": "에러 발생 url",
                        "method": "에러 발생 메소드",
                        "error": {
                          "error": "로그인에 실패했습니다.",
                          "statusCode": 400,
                          "message": "BadRequestException",
                          "code": "ERROR-3002"
                        }
                      },
                      "description": "로그인에 실패했습니다."
                    }
                  }
                }
              },
              "description": ""
            }
          },
          "tags": [
            "users API"
          ]
        }
      },
      "/users/logout": {
        "post": {
          "operationId": "UsersController_logOut",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "users API"
          ]
        }
      }
    },
    "info": {
      "title": "멍냥뿌지 - API",
      "description": "BackEnd API DOCS",
      "version": "0.0.1",
      "contact": {}
    },
    "tags": [],
    "servers": [
      {
        "description": "Production Server"
      },
      {
        "url": "http://localhost:5000",
        "description": "Local Server"
      }
    ],
    "components": {
      "schemas": {
        "ErrorCommonResponse": {
          "type": "object",
          "properties": {
            "timestamp": {
              "type": "string",
              "description": "에러 발생시간",
              "fieldName": "timestamp"
            },
            "path": {
              "type": "string",
              "description": "에러 발생 url",
              "fieldName": "path"
            },
            "method": {
              "type": "string",
              "description": "에러 발생 메소드",
              "fieldName": "method"
            },
            "error": {
              "type": "generic",
              "description": "HttpExceptionErrorResponseDto,ValidationErrorResponseDto 두가지가 올수있습니다.",
              "fieldName": "error"
            }
          },
          "required": [
            "timestamp",
            "path",
            "method",
            "error"
          ]
        },
        "HttpExceptionErrorResponseDto": {
          "type": "object",
          "properties": {
            "error": {
              "type": "string",
              "enum": [
                "BadRequestException",
                "ForbiddenException",
                "NotFoundException",
                "UnauthorizedException",
                "NotAcceptableException",
                "RequestTimeoutException",
                "ConflictException",
                "GoneException",
                "HttpVersionNotSupportedException",
                "PayloadTooLargeException",
                "UnsupportedMediaTypeException",
                "UnprocessableEntityException",
                "InternalServerErrorException",
                "NotImplementedException",
                "ImATeapotException",
                "MethodNotAllowedException",
                "BadGatewayException",
                "ServiceUnavailableException",
                "GatewayTimeoutException",
                "PreconditionFailedException",
                "ThrottlerException"
              ],
              "description": "에러명"
            },
            "message": {
              "type": "string",
              "description": "에러메시지"
            },
            "statusCode": {
              "type": "number",
              "enum": [
                100,
                101,
                102,
                103,
                200,
                201,
                202,
                203,
                204,
                205,
                206,
                300,
                301,
                302,
                303,
                304,
                307,
                308,
                400,
                401,
                402,
                403,
                404,
                405,
                406,
                407,
                408,
                409,
                410,
                411,
                412,
                413,
                414,
                415,
                416,
                417,
                418,
                421,
                422,
                424,
                429,
                500,
                501,
                502,
                503,
                504,
                505
              ],
              "description": "상태코드 400~500번대만 봐주세용"
            },
            "code": {
              "type": "string",
              "description": "에러코드가 넘어옵니다. 널값일 수 있습니다!!!",
              "nullable": true
            }
          },
          "required": [
            "error",
            "message",
            "statusCode",
            "code"
          ]
        },
        "ValidationErrorResponseDto": {
          "type": "object",
          "properties": {
            "error": {
              "type": "string",
              "description": "에러명",
              "example": "ValidationError"
            },
            "code": {
              "type": "string",
              "description": "밸리데이션 에러는 코드도 ValidationError입니다.",
              "example": "ValidationError"
            },
            "message": {
              "type": "string",
              "description": "에러메시지",
              "example": "검증오류"
            },
            "statusCode": {
              "type": "number",
              "description": "400 검증오류 고정",
              "example": 400
            },
            "validationErrorInfo": {
              "type": "object",
              "description": "필드 : [에러정보] 형식의 에러정보가 담긴 객체입니다.",
              "example": {
                "fieldName": [
                  "errorinfoOfString"
                ]
              }
            }
          },
          "required": [
            "error",
            "code",
            "message",
            "statusCode",
            "validationErrorInfo"
          ]
        },
        "ResAnimalTypeDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
              "description": "UUID",
              "fieldName": "id"
            },
            "createdAt": {
              "type": "string",
              "example": "2023-07-13T06:28:32.525Z",
              "description": "업데이트 일자",
              "fieldName": "createdAt"
            },
            "updatedAt": {
              "type": "string",
              "example": "2023-07-13T06:28:32.525Z",
              "description": "생성 일자",
              "fieldName": "updatedAt"
            },
            "name": {
              "type": "string",
              "example": "강아지",
              "description": "반려 동물 종류 이름",
              "fieldName": "name"
            },
            "detail_name": {
              "type": "string",
              "example": "진돗개",
              "description": "반려 동물의 상세 이름",
              "fieldName": "detail_name"
            }
          },
          "required": [
            "id",
            "createdAt",
            "updatedAt",
            "name",
            "detail_name"
          ]
        },
        "SuccessCommonResponseDto": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean",
              "description": "성공여부",
              "fieldName": "success"
            },
            "data": {
              "type": "generic",
              "description": "object 또는 array 형식의 응답데이타가 옵니다.",
              "fieldName": "data"
            }
          },
          "required": [
            "success",
            "data"
          ]
        },
        "CreateAnimalTypeDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "강아지",
              "description": "반려 동물 종류 이름"
            },
            "detail_name": {
              "type": "string",
              "example": "진돗개",
              "description": "반려 동물의 상세 이름"
            }
          },
          "required": [
            "name",
            "detail_name"
          ]
        },
        "ResAnimalTypeNameDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": [
                "고양이",
                "강아지"
              ],
              "description": "등록된 반려동물의 종류",
              "fieldName": "name"
            }
          },
          "required": [
            "name"
          ]
        },
        "ResAnimalTypeDetailNameDto": {
          "type": "object",
          "properties": {
            "detail_name": {
              "type": "string",
              "example": [
                "귀여운 고양이",
                "머진 고양이",
                "이뿌니 고양이",
                "나 화남 고양이"
              ],
              "description": "등록된 반려동물의 상세 이름",
              "fieldName": "detail_name"
            }
          },
          "required": [
            "detail_name"
          ]
        },
        "GetAnimalTypeByDetailNameDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "강아지",
              "description": "반려 동물 종류 이름"
            }
          },
          "required": [
            "name"
          ]
        },
        "UpdateAnimalTypeByDetailNameDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
              "description": "UUID"
            },
            "detail_name": {
              "type": "string",
              "example": "진돗개",
              "description": "반려 동물의 상세 이름"
            }
          },
          "required": [
            "id",
            "detail_name"
          ]
        },
        "DeleteAnimalTypeByDetailNameDto": {
          "type": "object",
          "properties": {
            "detail_name": {
              "type": "string",
              "example": "진돗개",
              "description": "반려 동물의 상세 이름"
            }
          },
          "required": [
            "detail_name"
          ]
        },
        "ResAnimalTypeManyRowDto": {
          "type": "object",
          "properties": {
            "row": {
              "type": "number",
              "example": 3,
              "description": "SoftDelete를 통해 삭제된 행",
              "fieldName": "row"
            }
          },
          "required": [
            "row"
          ]
        },
        "DeleteAnimalTypeNameDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "강아지",
              "description": "반려 동물 종류 이름"
            }
          },
          "required": [
            "name"
          ]
        },
        "ResGuardianDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
              "description": "UUID",
              "fieldName": "id"
            },
            "createdAt": {
              "type": "string",
              "example": "2023-07-13T06:28:32.525Z",
              "description": "업데이트 일자",
              "fieldName": "createdAt"
            },
            "updatedAt": {
              "type": "string",
              "example": "2023-07-13T06:28:32.525Z",
              "description": "생성 일자",
              "fieldName": "updatedAt"
            },
            "name": {
              "type": "string",
              "example": "홍길동",
              "description": "반려동물 보호자 이름",
              "fieldName": "name"
            },
            "phone_number": {
              "type": "string",
              "example": "010-1234-1234",
              "description": "보호자 전화번호",
              "fieldName": "phone_number"
            }
          },
          "required": [
            "id",
            "createdAt",
            "updatedAt",
            "name",
            "phone_number"
          ]
        },
        "CreateGuardianDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "홍길동",
              "description": "반려동물 보호자 이름"
            },
            "phone_number": {
              "type": "string",
              "example": "010-1234-1234",
              "description": "보호자 전화번호"
            }
          },
          "required": [
            "name",
            "phone_number"
          ]
        },
        "UpdateGuardianDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "홍길동",
              "description": "반려동물 보호자 이름"
            },
            "phone_number": {
              "type": "string",
              "example": "010-1234-1234",
              "description": "보호자 전화번호"
            }
          },
          "required": [
            "name",
            "phone_number"
          ]
        },
        "ResGuardianRowDto": {
          "type": "object",
          "properties": {
            "row": {
              "type": "number",
              "example": 1,
              "description": "SoftDelete를 통해 삭제된 행",
              "fieldName": "row"
            }
          },
          "required": [
            "row"
          ]
        },
        "DeleteGuardianDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
              "description": "UUID"
            }
          },
          "required": [
            "id"
          ]
        },
        "ResUsersTypeDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "example": "acd9c17d-56f5-42dc-8cbb-7808e080cab2",
              "description": "UUID",
              "fieldName": "id"
            },
            "createdAt": {
              "type": "string",
              "example": "2023-07-13T06:28:32.525Z",
              "description": "업데이트 일자",
              "fieldName": "createdAt"
            },
            "updatedAt": {
              "type": "string",
              "example": "2023-07-13T06:28:32.525Z",
              "description": "생성 일자",
              "fieldName": "updatedAt"
            },
            "user_id": {
              "type": "string",
              "example": "develop",
              "description": "유저 아아디",
              "fieldName": "user_id"
            },
            "password": {
              "type": "string",
              "example": "1234",
              "description": "유저의 패스워드",
              "fieldName": "password"
            },
            "consent_check": {
              "type": "boolean",
              "example": true,
              "description": "서비스이용약관",
              "fieldName": "consent_check"
            },
            "privacy_policy_check": {
              "type": "boolean",
              "example": true,
              "description": "개인정보처리방침",
              "fieldName": "privacy_policy_check"
            }
          },
          "required": [
            "id",
            "createdAt",
            "updatedAt",
            "user_id",
            "password",
            "consent_check",
            "privacy_policy_check"
          ]
        },
        "CreateUsersDto": {
          "type": "object",
          "properties": {
            "user_id": {
              "type": "string",
              "example": "develop",
              "description": "유저 아아디"
            },
            "consent_check": {
              "type": "boolean",
              "example": true,
              "description": "서비스이용약관"
            },
            "privacy_policy_check": {
              "type": "boolean",
              "example": true,
              "description": "개인정보처리방침"
            }
          },
          "required": [
            "user_id",
            "consent_check",
            "privacy_policy_check"
          ]
        },
        "LoginDto": {
          "type": "object",
          "properties": {
            "user_id": {
              "type": "string",
              "example": "develop",
              "description": "유저 아아디"
            }
          },
          "required": [
            "user_id"
          ]
        }
      }
    }
  },
  "customOptions": {
    "servers": [
      {
        "description": "Production Server"
      },
      {
        "url": "http://localhost:5000",
        "description": "Local Server"
      }
    ]
  },
  "swaggerUrl": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
