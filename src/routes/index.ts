import { Router } from "express";
import { readdirSync } from "fs";


const PATH_ROUTER = `${__dirname}`;
const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>API REST - Expediente Electronico 2023</h1>");
  });
  
  

/**
 *
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    console.log(`Loading router: ${cleanName}`);
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/api/${cleanName}`, moduleRouter.router);
    });
  }
});


export { router };
