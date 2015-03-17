module.exports = {


  friendlyName: 'Set response header',


  description: 'Set an eventual value for the specified header when the current outgoing response is sent.',


  extendedDescription: 'Note that header names are case-insensitive.',


  sync: true,


  environment: ['res'],


  inputs: {

    header: {
      description: 'The name of the response header.',
      example: 'content-type',
      required: true
    },

    value: {
      description: 'The string value for the response header.',
      example: 'application/json',
      required: true
    }

  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Done.'
    },

  },


  fn: function (inputs, exits, env) {
    env.res.set(inputs.header, inputs.value);
    return exits.success();
  },



};
