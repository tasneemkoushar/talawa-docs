[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/isAuth](../README.md) / isAuthMiddleware

# Function: isAuthMiddleware()

\> **isAuthMiddleware**(`req`, `res`, `next`): `void`

Middleware for REST APIs to authenticate users based on the JWT token in the Authorization header.

This middleware checks if the incoming request has a valid JWT token. It sets the authentication
status, user ID, and token expiration status on the `req` object for downstream middleware and
route handlers to use.

## Parameters

### req

[`InterfaceAuthenticatedRequest`](../interfaces/InterfaceAuthenticatedRequest.md)

The incoming request object. The JWT token is expected in the `Authorization` header.

### res

`Response`\<`any`, `Record`\<`string`, `any`\>\>

The response object. If authentication fails, an HTTP 401 response will be sent.

### next

`NextFunction`

The next middleware function in the stack. It is called if the user is authenticated.

## Returns

`void`

Returns a 401 Unauthorized response if the user is not authenticated or the token has expired.

## Example

```typescript
app.use("/api/protected-route", isAuthMiddleware, (req, res) =\> \{
  if (req.isAuth) \{
    res.json(\{ message: "This is a protected route" \});
  \}
\});
```

## Defined in

[src/middleware/isAuth.ts:110](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/middleware/isAuth.ts#L110)
