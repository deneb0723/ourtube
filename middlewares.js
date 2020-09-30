import multer from "multer";
import routes from "./routes";

const multerVideo = multer({
    dest: "uploads/videos/"
});


export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "아워튜브";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};

export const uploadVideo = multerVideo.single("videoFile");