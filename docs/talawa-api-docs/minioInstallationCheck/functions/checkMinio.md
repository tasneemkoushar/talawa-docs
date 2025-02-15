[**talawa-api**](../../README.md)

***

[talawa-api](../../modules.md) / [minioInstallationCheck](../README.md) / checkMinio

# Function: checkMinio()

\> **checkMinio**(): `Promise`\<`string` \| `void`\>

Checks if MinIO is installed by attempting to execute `minio --version`.
If MinIO is not installed, it triggers the installation process.

This function first checks if MinIO is already installed by calling `isMinioInstalled()`.
- If MinIO is found to be installed, it logs a message and resolves with no value.
- If MinIO is not found, it initiates the installation process using `installMinio()`.
  - If the installation succeeds, it logs a success message and resolves with the path to the installed MinIO binary.
  - If the installation fails, it logs an error message and rejects the promise with the error.

## Returns

`Promise`\<`string` \| `void`\>

A promise that resolves with:
  - The path to the MinIO binary if it was installed.
  - No value if MinIO was already installed.

## Throws

Error If an error occurs during the check or installation process.

## Defined in

[src/minioInstallationCheck.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/minioInstallationCheck.ts#L25)
