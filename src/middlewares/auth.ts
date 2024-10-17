// export const myAuth = (req: Request, res: Response, next: NextFunction) => {
if (!req.cookies.userId) {
  return res.status(401).send('Unauthorized user');
}

next();
// };
//
