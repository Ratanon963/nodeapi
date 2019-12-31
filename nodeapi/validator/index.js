exports.createPostValidator = (req, res, next) => {

    // Title
    req.check('title', "Writer a title").notEmpty();
    req.check('title', "Title must be between 4 to 150 chatacters").isLength({
        min:4,
        max:150
    });

    // Body
    req.check('body', "Writer a body").notEmpty();
    req.check('body', "Body must be between 4 to 2000 chatacters").isLength({
        min:4,
        max:2000
    });

    //Check for errors

    const errors = req.validationErrors();
    // if error show the first one as they happen
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error: firstError});
    }

    // proceed to next middleware
    next();

    
};


exports.userSignupValidator = (req, res,  next) => {
    // name is not null and between 4-10 characters
    req.check("name", "Name is required").notEmpty();

    // email is not null,valid and normalized 
    req.check("email", "E-mail must br between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min: 4,
        max: 2000
    })

    // check for password
    req.check("password","Password is required").notEmpty();
    req.check("password")
    .isLength({min: 6})
    .withMessage("Password must contain at least 6 charaters")
    .matches(/\d/)
    .withMessage("Password must contain a number")
    
    
    //check for error
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error: firstError});
    }

    // proceed to next middleware
    next();



} 

