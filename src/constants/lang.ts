export const ERROR_MESSAGE = {
  FETCHED: (fieldName: string) => `Error while fetching the ${fieldName}.`,
  CREATED: (fieldName: string) => `Error while creating the ${fieldName}.`,
  UPDATED: (fieldName: string) => `Error while updating the ${fieldName}.`,
  DELETED: (fieldName: string) => `Error while deleting the ${fieldName}.`,
  VERIFIED: (fieldName: string) => `Error while verifying the ${fieldName}.`
};

export const SUCCESS_MESSAGE = {
  CREATED: (fieldName: string) => `Successfully created the ${fieldName}.`,
  UPDATED: (fieldName: string) => `Successfully updated the ${fieldName}.`,
  FETCHED: (fieldName: string) => `Successfully fetched the ${fieldName}.`,
  DELETED: (fieldName: string) => `Successfully deleted the ${fieldName}.`,
  VERIFIED: (fieldName: string) => `Successfully verified the ${fieldName}.`
};

export const VALIDATION_MESSAGE = {
  REQUIRED: (fieldName: string) => `The ${fieldName} field is required.`
};
