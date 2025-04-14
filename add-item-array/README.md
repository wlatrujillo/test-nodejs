Add reprocesssing true to items in array if not exists

Example:


[
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
            "S": "4411"
          },
          "jobName": {
            "S": "FIN DIA GENERAR UNIVERSO (G)"
          }
        }
      }
    }
]

Result


[
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
            "S": "4411"
          },
          "jobName": {
            "S": "FIN DIA GENERAR UNIVERSO (G)"
          }
        }
      }
    }
]