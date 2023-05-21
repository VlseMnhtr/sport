# sport
new repo 

/**
 * @openapi
 * /category:
 *  post:
 *      summary: create new category
 *      requestBody:
 *          description: Optional description in *Markdown*
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: member name
 *        
 *                          number:
 *                              type: integer
 *                              description: member number
 *      responses: 
 *          201:
 *              description: Category created
 *          414:
 *              description: Category name is not valid.
 *          422:
 *              description: Already exists or has an error.
 */
