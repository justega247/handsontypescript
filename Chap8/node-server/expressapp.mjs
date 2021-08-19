import express from "express";

const app = express();

app.use(express.json());

const router = express.Router();

app.use((req, res, next) => {
  console.log("First middleware.");
  next();
});

app.use(router);

router.get("/api/v1/users", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "tom",
    },
    {
      id: 2,
      username: "jon",
    },
    {
      id: 3,
      username: "linda"
    }
  ];

  console.log(req.query.userid);
  const user = users.find((usr) => usr.id == req.query.userid);
  res.send(`User ${user?.username}`);
});

router.post("/api/v1/groups", (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: "Admins",
    },
    {
      id: 2,
      groupname: "Users",
    },
    {
      id: 3,
      groupname: "Employees"
    }
  ];

  console.log("pop",req.query.groupid);

  const group = groups.find((grp) => grp.id == req.body.groupid);
  res.send(`Group ${group.groupname}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Express node server has loaded!");
});
