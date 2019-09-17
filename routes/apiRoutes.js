var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/jobs", function (req, res) {
    db.Job.findAll({}).then(function (dbJobs) {
      res.json(dbJobs);
    });
  });

  // --------------------tasklist get request------------------------------------------------------------------------------
  app.get("/api/tasklists", function (req, res) {
    db.Tasks.findAll({}).then(function (dbTasks) {
      res.json(dbTasks);
    });
  });

  app.get("/api/logins", function (req, res) {
    db.Login.findAll({}).then(function (dbLogins) {
      res.json(dbLogins)
    })
  })

  app.get("/api/jobs/:id", function (req, res) {
    db.Job.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbJobs) {
      res.json(dbJobs);
    });
  });

  app.get("/api/jobs/search/:id", function (req, res) {
    db.Job.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbJobs) {
      res.json(dbJobs);
    });
  });

  app.get("/api/tasklists/search/:id", function (req, res) {
    db.Tasks.findAll({
      where: {
        project_id: req.params.id
      }
    }).then(function (dbTasks) {
      res.json(dbTasks);
    });
  });

  app.get("/api/jobsites/:id", function (req, res) {
    db.Jobsite.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbJobsite) {
      res.json(dbJobsite);
    });
  });

  app.get("/api/jobsites/search/:id", function (req, res) {
    db.Jobsite.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbJobsite) {
      res.json(dbJobsite);
    });
  });

  app.get("/api/jobsites", function (req, res) {
    db.Jobsite.findAll({}).then(function (dbJobsites) {
      res.json(dbJobsites);
    });
  });

  app.get("/api/supervisors", function (req, res) {
    db.Supervisor.findAll({}).then(function (dbSupervisors) {
      res.json(dbSupervisors);
    });
  });

  app.get("/api/supervisors/:id", function (req, res) {
    db.Supervisor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbSupervisor) {
      res.json(dbSupervisor);
    });
  });

  app.get("/api/supervisors/search/:id", function (req, res) {
    db.Supervisor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbSupervisor) {
      res.json(dbSupervisor);
    });
  });

  app.get("/view/manager/table", function (req, res) {
    db.Job.findAll({}).then(function (data) {
      // console.log(data[0].dataValues);
      var projectArray = [];
      for (i = 0; i < data.length; i++) {
        projectArray.push(data[i].dataValues);
      }
      // console.log(dataArray)
      var hbsObject = {
        projects: projectArray
      };
      // console.log(hbsObject);
      res.render("tableView", hbsObject);
    });
  });

  app.get("/view/manager/table/jobsites", function (req, res) {
    db.Jobsite.findAll({}).then(function (data) {
      var jobsiteArray = [];
      for (i = 0; i < data.length; i++) {
        jobsiteArray.push(data[i].dataValues);
      }

      var hbsObject = {
        jobsites: jobsiteArray
      };
      res.render("jobsiteTableView", hbsObject);
    });
  });

  app.get("/view/manager/table/supervisors", function (req, res) {
    db.Supervisor.findAll({}).then(function (data) {
      var supervisorArray = [];
      for (i = 0; i < data.length; i++) {
        supervisorArray.push(data[i].dataValues);
      }

      var hbsObject = {
        supervisors: supervisorArray
      };
      res.render("supervisorTableView", hbsObject);
    })
  });


  app.get("/view/manager/table/customers", function (req, res) {
    db.Customer.findAll({}).then(function (data) {
      var customerArray = [];
      for (i = 0; i < data.length; i++) {
        (customerArray).push(data[i].dataValues);
      }

      var hbsObject = {
        customers: customerArray
      };
      res.render("customerTableView", hbsObject);
    })
  });

  app.post("/api/jobs", function (req, res) {
    db.Job.create(req.body).then(function (dbJobs) {
      res.json(dbJobs);
    });
  });

  app.post("/api/jobsites", function (req, res) {
    db.Jobsite.create(req.body).then(function (dbJobsites) {
      res.json(dbJobsites);
    });
  });

  app.post("/api/supervisors", function (req, res) {
    db.Supervisor.create(req.body).then(function (dbSupervisors) {
      res.json(dbSupervisors);
    });
  });

  app.post("/api/logins", function (req, res) {
    db.Login.create(req.body).then(function (dbLogins) {
      res.json(dbLogins);
    });
  });

  app.post("/api/customers", function (req, res) {
    db.Customer.create(req.body).then(function (dbCustomers) {
      res.json(dbCustomers);
    });
  });

  // --------------------POST REQUEST FOR TASKLIST--------------------------------

  app.post("/api/tasklists", function (req, res) {
    db.Tasks.create(req.body).then(function (dbTasks) {
      res.json(dbTasks);
    });
  });


  app.get("/api/customers/lookup/:id", function (req, res) {
    db.Customer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbCustomer) {

      res.json(dbCustomer)
    })
  });


  app.post("/api/customers/delete/:id", function (req, res) {
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (rowDeleted) {
      res.json(rowDeleted);
    })
  });

  app.post("/api/tasklists/delete/:id", function (req, res) {
    db.Tasks.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.json(data);
    })
  })

  app.put("/api/foreman", function (req, res) {
    db.Job.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbProjInfo) {
      res.json(dbProjInfo);
    });
  });

  app.put("/api/jobtable/:id", function (req, res) {
    db.Job.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (dbJobs) {
      res.json(dbJobs);
    })
  })


  app.put("/api/tasklists", function (req, res) {
    db.Tasks.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbTasks){
      res.json(dbTasks)
    })
  })


  app.put("/api/jobsites", function (req, res) {
    db.Jobsite.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbJobsiteInfo) {
      res.json(dbJobsiteInfo);
    });
  });

  app.put("/api/supervisors", function (req, res) {
    db.Supervisor.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbSupervisorInfo) {
      res.json(dbSupervisorInfo);
    });
  });



  app.post('/auth', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
      db.Login.findOne({
        where: {
          username,
          password
        }
      }).then(function (results) {
        // console.log(results);
        // console.log(results.dataValues !== "null");
        // console.log(typeof results.dataValues.id);
        // console.log(results.dataValues.length);
        if (results) {
          // save keys on the session object to access throughout your routes
          req.session.loggedin = true;
          req.session.username = username;
          res.redirect('/view');
        } else {
          res.send('Incorrect Username and/or Password!');
        }
        res.end();
      })
    } else {
      res.send('Please enter Username and Password!');
      res.end();
    }
  });



  //   if (username && password) {
  //     connection.query(
  //       'SELECT * FROM logins WHERE username = ? AND password = ?',
  //       [username, password],
  //       function(error, results, fields) {
  //         if (results.length > 0) {
  //           // save keys on the session object to access throughout your routes
  //           request.session.loggedin = true;
  //           request.session.username = username;
  //           response.redirect('/view');
  //         } else {
  //           response.send('Incorrect Username and/or Password!');
  //         }
  //         response.end();
  //       }
  //     );
  //   } else {
  //     response.send('Please enter Username and Password!');
  //     response.end();
  //   }
  // });


  //   // Create a new example
  //   app.post("/api/examples", function(req, res) {
  //     db.Example.create(req.body).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
};