import { Table } from "sst/node/table"
import handler from "@sandbox-sst-notes/core/handler"
import dynamodb from "@sandbox-sst-notes/core/dynamodb"

export const main = handler(async (event) => {
    const params = {
        TableName: Table.Notes.tableName,
        Key: {
            userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
            noteId: event?.pathParameters?.id
        }
    }

    await dynamodb.delete(params)

    return JSON.stringify({status: true})
})