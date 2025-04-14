const { describe, it } = require('node:test');
const assert = require('node:assert');

const { addItemIfNotExists } = require('./index');

describe('Tests', () => {

    it('Should filter repeated items', () => {

        const arr = [
            {
                "PutRequest": {
                    "Item": {
                        "configuration": {
                            "M": {
                                "computeEnvironment": {
                                    "S": "%BatchComputeEnvironment%"
                                },
                                "logLevel": {
                                    "S": "ERROR"
                                },
                                "reprocessable": {
                                    "BOOL": true
                                }
                            }
                        },
                        "jobId": {
                            "S": "4411"
                        },
                        "jobName": {
                            "S": "FIN DIA GENERAR UNIVERSO (G)"
                        }
                    }
                }
            },
            {
                "PutRequest": {
                    "Item": {
                        "configuration": {
                            "M": {
                                "computeEnvironment": {
                                    "S": "%BatchComputeEnvironment%"
                                },
                                "logLevel": {
                                    "S": "ERROR"
                                }
                            }
                        },
                        "jobId": {
                            "S": "4412"
                        },
                        "jobName": {
                            "S": "FIN DIA GENERAR UNIVERSO (G)"
                        }
                    }
                }
            }
        ];

        assert.deepEqual(addItemIfNotExists(arr).items, [
            {
                "PutRequest": {
                    "Item": {
                        "configuration": {
                            "M": {
                                "computeEnvironment": {
                                    "S": "%BatchComputeEnvironment%"
                                },
                                "logLevel": {
                                    "S": "ERROR"
                                },
                                "reprocessable": {
                                    "BOOL": true
                                }
                            }
                        },
                        "jobId": {
                            "S": "4411"
                        },
                        "jobName": {
                            "S": "FIN DIA GENERAR UNIVERSO (G)"
                        }
                    }
                }
            },
            {
                "PutRequest": {
                    "Item": {
                        "configuration": {
                            "M": {
                                "computeEnvironment": {
                                    "S": "%BatchComputeEnvironment%"
                                },
                                "logLevel": {
                                    "S": "ERROR"
                                },
                                "reprocessable": {
                                    "BOOL": true
                                }
                            }
                        },
                        "jobId": {
                            "S": "4412"
                        },
                        "jobName": {
                            "S": "FIN DIA GENERAR UNIVERSO (G)"
                        }
                    }
                }
            }
        ]);
    });

});

