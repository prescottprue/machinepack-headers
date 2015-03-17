module.exports = {


  friendlyName: 'Get request header',


  description: 'Get the value of the specified header from the current incoming request.',


  extendedDescription: 'Note that header names are case-insensitive, and that this machine treats both "referrer" and "referer" as synonyms, because they are interchangeable in some HTTP implementations.',


  cacheable: true,


  sync: true,


  environment: ['req'],


  inputs: {

    header: {
      description: 'The name of the request header.',
      example: 'accept',
      required: true
    }

  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Returns the raw string value of the request header.',
      example: 'text/javascript'
    },

  },


  fn: function (inputs, exits, env) {
    return exits.success(env.req.get(inputs.header));
  },



};
