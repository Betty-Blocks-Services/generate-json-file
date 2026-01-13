const CONTENT_TYPES = {
  json: 'application/json',
  xml: 'application/xml',
  txt: 'text/plain',
  ics: 'text/calendar',
};

const generateFile = async ({
  fileType,
  fileContent,
  fileName,
  model: { name: modelName },
  property: [{ name: propertyName }],
}) => {
  const fileReference = await storeFile(modelName, propertyName, {
    contentType: CONTENT_TYPES[fileType],
    extension: fileType,
    fileName,
    fileBuffer: fileContent,
  });

  return {
    result: fileReference,
  };
};

export default generateFile;
