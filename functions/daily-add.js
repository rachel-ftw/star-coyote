const { dailies } = require("./utils/dailies-mocks");

exports.handler = async ({ queryStringParameters }) => {
  const { title } = queryStringParameters;
  const newData = dailies.add(title);

  return {
    statusCode: 200,
    body: JSON.stringify(newData),
  };
};
