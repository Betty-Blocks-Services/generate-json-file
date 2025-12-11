const generateJsonFile = async ({
  fileContent,
  fileName,
  model: { name: modelName },
  property: [{ name: propertyName }],
}) => {
  const fileReference = await storeFile(modelName, propertyName, {
    contentType: 'application/json',
    extension: 'json',
    fileName,
    fileBuffer: fileContent,
  });

  return {
    result: fileReference,
  };
};

export default generateJsonFile;
