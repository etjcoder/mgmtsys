$(document).ready(function () {

  // hides all forms on page load
  $("#create-project").hide();
  $("#create-jobsite").hide();
  $("#create-supervisor").hide();
  $(".search-jobs-row").hide();
  $(".search-jobsite-row").hide();
  $(".search-supervisor-row").hide();
  $(".customer-info-table").hide();
  $(".foreman-project-report").hide();
  $(".add-task").hide();
  $(".add-user-login").hide();

  // $("#customer-requests").hide();


  // on click event for login button
  // $("#loginBtn").on("click", function(event) {
  //   event.preventDefault();
  //   $.post("/auth")
  // });

  //from select view page, on click for manager button
  $("#managerBtn").on("click", function (event) {
    event.preventDefault();
    console.log("you are now in manager view");
    window.location.assign("/view/manager");
  });

  //to return to view page from both manager and foreman views
  $("#viewBtn").on("click", function (event) {
    event.preventDefault();
    console.log("you are now in select view");
    window.location.assign("/view");
  });

  //from select view page, on click for foreman button
  $("#foremanBtn").on("click", function (event) {
    event.preventDefault();
    console.log("you are now in foreman view");
    window.location.assign("/view/foreman")

  })

  $("#customerBtn").on("click", function (event) {
    event.preventDefault();
    console.log("You are now going to customer view");
    window.location.assign("/view/customer")
  })


  //from manager view, on click to add job form
  $("#createJob").on("click", function (event) {
    event.preventDefault();
    console.log("show form to create a new job");
    $("#create-project").show();
    $("#create-jobsite").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();
  });

  //from manager view, on click to add jobsite form
  $("#addJobsite").on("click", function (event) {
    event.preventDefault();
    console.log("show form to create a new job");

    $("#create-jobsite").show();
    $("#create-project").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();


  })

  //from manager view, on click to add jobsite form
  $("#addSuper").on("click", function (event) {
    event.preventDefault();
    console.log("show form to create a new job");

    $("#create-supervisor").show();
    $("#create-project").hide();
    $("#create-jobsite").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();



  })

  $("#addUser").on("click", function (event) {
    event.preventDefault();
    console.log("show form to create a new user");

    $("#create-supervisor").hide();
    $("#create-project").hide();
    $("#create-jobsite").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").show();

  })




  $("#searchJobs").on("click", function (event) {
    event.preventDefault();
    console.log("show form to search through jobs");

    $("#create-project").hide();
    $("#create-jobsite").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").show();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();



  })

  $("#searchSites").on("click", function (event) {
    event.preventDefault();
    console.log("show form to search through jobsites");

    $("#create-project").hide();
    $("#create-jobsite").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").show();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();



  })

  $("#searchSuper").on("click", function (event) {
    event.preventDefault();
    console.log("show form to search through supervisors")

    $("#create-project").hide();
    $("#create-jobsite").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").show();
    $(".add-user-login").hide();

  })

  //foreman on click to submit report
  $("#createProjectReport").on("click", function (event) {
    event.preventDefault();
    console.log("show form to submit project report")

    $("#create-project").hide();
    $("#create-jobsite").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();
    $(".foreman-project-report").show();
    $(".add-task").hide();
  })

  //foreman on click to add to task list
  $("#addTask").on("click", function (event) {
    event.preventDefault();
    console.log("show form to create a task list")

    $("#create-project").hide();
    $("#create-jobsite").hide();
    $("#create-supervisor").hide();
    $(".search-jobs-row").hide();
    $(".search-jobsite-row").hide();
    $(".search-supervisor-row").hide();
    $(".add-user-login").hide();
    $(".foreman-project-report").hide();
    $(".add-task").show();
  })

  $("#employee-login").on("click", function (event) {
    event.preventDefault();
    console.log("view login page");
    window.location.assign("/")
  })


  //from manager view, on click view jobs button
  $("#viewJobs").on("click", function (event) {
    event.preventDefault();
    console.log("view list of all jobs");
    window.location.assign("/view/manager/table")

  })

  //from manager view, on click for view all jobsites
  $("#viewJobsites").on("click", function (event) {
    event.preventDefault();
    console.log("view list of all jobsites");
    window.location.assign("/view/manager/table/jobsites")

  })

  //from manager view, on click for view supervisors
  $("#viewSuper").on("click", function (event) {
    event.preventDefault();
    console.log("view list of supervisors");
    window.location.assign("/view/manager/table/supervisors")

  })

  //from manager view, on click for view customers
  $("#viewCustomer").on("click", function (event) {
    event.preventDefault();
    console.log("view list of customers");
    window.location.assign("/view/manager/table/customers")
  })

  $("#create-project").on("submit", function (event) {
    event.preventDefault();
    console.log("i've been clicked");

    var newProject = {
      supervisor_id: parseInt($("#new-proj-supervisor").val()),
      jobsite_id: parseInt($("#new-proj-jobsite").val()),
      project_bid: parseInt($("#project-bid").val().trim()),
      project_name: $("#project-name").val().trim()
    };

    $.ajax("/api/jobs", {
      type: "POST",
      data: newProject
    }).then(
      function () {
        console.log("Created a new project");
        location.reload();
      }
    )

    console.log(newProject);

  });

  $("#create-jobsite").on("submit", function (event) {
    event.preventDefault();
    console.log("i've been clicked");

    var newJobsite = {
      jobsite_name: $("#jobsite-name").val().trim(),
      address: $("#jobsite-address").val().trim(),
      primary_contact: $("#jobsite-primarycontact").val().trim(),
      phone_number: $("#jobsite-phone").val().trim(),
      email: $("#jobsite-email").val().trim()
    };

    $.ajax("/api/jobsites/", {
      type: "POST",
      data: newJobsite
    }).then(
      function () {
        console.log("Created a new jobsite");
        location.reload();
      }
    )
  })

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


  $(".edit-button").on("click", function (event) {
    event.preventDefault();
    console.log("You've submitted this form");

    console.log($(this).val());

    i = $(this).val();

    var expenses = parseInt($(`.wagecosts-${i}`).val().trim()) + parseInt($(`.materialcosts-${i}`).val().trim());
    var revenues = parseInt($(`.project_bid-${i}`).val().trim());
    var newProfits = revenues - expenses;

    var newRow = {
      project_name: $(`.project_name-${i}`).val().trim(),
      project_bid: $(`.project_bid-${i}`).val().trim(),
      hours: $(`.hours-${i}`).val().trim(),
      wagecosts: $(`.wagecosts-${i}`).val().trim(),
      materialcosts: $(`.materialcosts-${i}`).val().trim(),
      profit: newProfits
    }

    console.log(newRow);

    $.ajax("/api/jobtable/" + i, {
      type: "PUT",
      data: newRow
    }).then(function(){
      alert("You've updated the table!");
      location.reload();
    })

  })


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  $("#create-supervisor").on("submit", function (event) {
    event.preventDefault();
    console.log("i've been clicked");

    var newSupervisor = {
      supervisor_name: $("#supervisor-name").val().trim(),
      specialties: $("#supervisor-specialties").val()
    };

    $.ajax("/api/supervisors/", {
      type: "POST",
      data: newSupervisor
    }).then(
      function () {
        console.log("Created a new supervisor");
        location.reload();
      }
    )
  })

  //tasklist AJAX call--------------------------------------------------------
  $("#create-task").on("submit", function (event) {
    event.preventDefault();
    console.log("i've been clicked");

    var newTask = {
      task_name: $("#task-name").val().trim(),
      task_description: $("#task-description").val(),
      project_id: $("#id-project-task").val()
    };

    $.ajax("/api/tasklists/", {
      type: "POST",
      data: newTask
    }).then(
      function () {
        console.log("Created a new task");
        location.reload();
      }
    )
  })


  $("#create-user").on("submit", function (event) {
    event.preventDefault();
    console.log("i've been clicked");

    var newUser = {
      username: $("#user-username").val().trim(),
      password: $("#user-password").val().trim(),
      email: $("#user-email").val().trim(),
      birthday: $("#user-birthdate").val().trim()
    }

    $.ajax("/api/logins", {
      type: "POST",
      data: newUser
    }).then(
      function () {
        console.log("Created a new user");
        location.reload();
      }
    )
  });


  //Customer requesting a job POST route from /view/customer/
  $("#project-request").on("submit", function (event) {
    event.preventDefault();

    var newCustomer = {
      customer_name: $("#customer-name").val().trim(),
      customer_email: $("#customer-email").val().trim(),
      customer_phone: $("#customer-phone").val().trim(),
      customer_address: $("#customer-address").val().trim(),
      acreage: $("#customer-acreage").val().trim(),
      customer_description: $("#customer-description").val().trim(),
      pricerange: $("#customer-pricerange").val().trim()
    }

    $.ajax("/api/customers", {
      type: "POST",
      data: newCustomer
    }).then(function () {
      alert("Youre request has been submitted!")
      location.reload()
    })
  });


  $("#project-info").on("submit", function (event) {
    event.preventDefault();
    console.log("I've been clicked");

    var projectInfo = {
      id: parseInt($("#project-id").val()),
      hours: parseInt($("#project-hours").val()),
      workers: parseInt($("#project-workers").val()),
      materialcosts: parseInt($("#project-materialcosts").val()),
      jobcomments: $("#project-jobcomments").val()
    }

    $.ajax("/api/foreman", {
      type: "PUT",
      data: projectInfo
    }).then(function () {
      alert("You input your job data!");
      calculateData();
    })

    //////////// Calculate Wages and Profits ////////////
    calculateData = function () {
      $.ajax("/api/jobs/" + projectInfo.id, {
        type: "GET"
      }).then(function (data) {
        // console.log(data);
        // console.log("current sales: " + data.sales);
        calculateWages(data);
      })
    }

    calculateWages = function (data) {
      console.log("Calculate wages will be using this data: " + JSON.stringify(data))
      var wages = data.hours * data.workers;
      console.log(wages)
      var wageObject = {
        id: data.id,
        wagecosts: wages
      }

      $.ajax("/api/foreman", {
        type: "PUT",
        data: wageObject
      }).then(function () {
        console.log("We've calculate wages and input that information for you into your table!");
        calculateProfit(data, wages);
      })

    }

    calculateProfit = function (data, wages) {
      console.log("Calculating Profits using this data: " + JSON.stringify(data))
      var revenue = data.project_bid;
      var expenses = wages + data.materialcosts;

      console.log("Project Revenues: " + revenue);
      console.log("Project Expenses: " + expenses);
      var profit = revenue - expenses;
      console.log("Project Profit: " + profit);

      var profitObject = {
        id: data.id,
        profit: profit
      }

      $.ajax("/api/foreman", {
        type: "PUT",
        data: profitObject
      }).then(function () {
        console.log("We've calculated the profit received on this project")
        getJobsiteData(data.id, data.jobsite_id);
        getSupervisorData(data.id, data.supervisor_id);
      })

    }

  })
  // function calculateNewSales(currentSales) {
  //   var newSales = currentSales + itemPrice;

  //   var productSales = {
  //     sales: newSales
  //   }

  //   $.ajax("/api/menu/order/" + itemData, {
  //     type: "PUT",
  //     data: productSales
  //   }).then(
  //     function () {
  //       console.log("Successfully updates sales");
  //       // location.reload();
  //     }
  //   )
  // }
  /////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////
  ////////////////// SEARCH INDIVIDUALS ////////////////

  $("#search-supervisor-form").on("submit", function (event) {
    event.preventDefault();
    console.log("You've searched for Supervisor ID: " + $("#supervisor-search").val());
    var superSearch = {
      id: parseInt($("#supervisor-search").val())
    }

    $.ajax("/api/supervisors/search/" + superSearch.id, {
      type: "GET"
    }).then(function (searchResult) {
      console.log(searchResult);
      $("#super-id").text(searchResult.id);
      $("#super-name").text(searchResult.supervisor_name);
      $("#super-expenses").text(searchResult.jobs_expenses);
      $("#super-revenue").text(searchResult.jobs_revenue);
      $("#super-profits").text(searchResult.jobs_profits);
    })

  })

  $("#search-jobsite-form").on("submit", function (event) {
    event.preventDefault();
    console.log("You've searched for Jobsite ID: " + $("#jobsite-search").val());

    var jobsiteSearch = {
      id: parseInt($("#jobsite-search").val())
    }

    $.ajax("/api/jobsites/search/" + jobsiteSearch.id, {
      type: "GET"
    }).then(function (searchResult) {
      console.log(searchResult);
      $("#jobsite-id").text(searchResult.id);
      $("#jobsite-title").text(searchResult.jobsite_name);
      $("#jobsite-expenses").text(searchResult.location_expenses);
      $("#jobsite-revenue").text(searchResult.location_revenue);
      $("#jobsite-profits").text(searchResult.location_profits);
    })

  })


  $("#search-jobs-form").on("submit", function (event) {
    event.preventDefault();
    console.log("You've searched for Job ID: " + $("#jobs-search").val());
    var jobsSearch = {
      id: parseInt($("#jobs-search").val())
    }

    $.ajax("/api/jobs/search/" + jobsSearch.id, {
      type: "GET"
    }).then(function (searchResult) {
      console.log(searchResult);
      $("#jobs-id").text(searchResult.id);
      $("#jobs-title").text(searchResult.project_name);
      $("#jobs-bid").text(searchResult.project_bid);
      $("#jobs-materialcosts").text(searchResult.materialcosts);
      $("#jobs-wagecosts").text(searchResult.wagecosts);
      $("#jobs-profit").text(searchResult.profit);
    })

  })


  $("#search-tasks-form").on("submit", function (event) {
    event.preventDefault();
    console.log("You've searched for Job ID: " + $("#tasks-search").val());
    var tasksSearch = {
      id: parseInt($("#tasks-search").val())
    }

    $("#tasks-table").html("")

    $.ajax("/api/tasklists/search/" + tasksSearch.id, {
      type: "GET"
    }).then(function (searchResult) {
      console.log(searchResult);

      for (i = 0; i < searchResult.length; i++) {
        var tableRow = $("<tr>");

        var idTd = $("<td>");
        var nameTd = $("<td>");
        var descrTd = $("<td>");
        var statusTd = $("<td>");
        var toggleTd = $("<td>");
        var deleteTd = $("<td>");
        var trueOrFalse = "";
        if (searchResult[i].status === false) {
          trueOrFalse = "Incomplete"
        } else {
          trueOrFalse = "Completed"
        }

        $(idTd).text(searchResult[i].id);
        $(nameTd).text(searchResult[i].task_name);
        $(descrTd).text(searchResult[i].task_description);
        $(statusTd).text(trueOrFalse);
        $(toggleTd).html(`<button class="mark-complete btn btn-warning" value="${searchResult[i].id}" id="mark-status">Mark Complete</button>`)
        $(deleteTd).html(`<button class="delete-task btn btn-danger" value="${searchResult[i].id}" id="delete-task">Delete Task</button>`)
        // $(toggleTd).addClass("toggle-task")

        $(tableRow).append(idTd);
        $(tableRow).append(nameTd);
        $(tableRow).append(descrTd);
        $(tableRow).append(statusTd);
        $(tableRow).append(toggleTd);
        $(tableRow).append(deleteTd);

        $("#tasks-table").append(tableRow)

        
      }
      $(".mark-complete").on("click", function (event){
        event.preventDefault();
        console.log("I've been clicked");
        console.log($(this).val())
        var taskID = $(this).val();

        var taskStatus = {
          status: true,
          id: taskID
        }
    
        $.ajax("/api/tasklists", {
          type: "PUT",
          data: taskStatus
        }).then(function () {
          alert("You updated this task!!");
          // calculateData();
        })


      })

      $(".delete-task").on("click", function (event){
        event.preventDefault();
        console.log("I've been clicked to delete");
        console.log($(this).val());

        var deletedTask = {
          id: $(this).val()
        }
    
        var confirmDeleteTask = confirm("Are you sure you want to delete this customer?");
    
        if (confirmDeleteTask) {
          $.ajax("/api/tasklists/delete/" + deletedTask.id, {
            type: "POST"
          }).then(function (response) {
            alert("Youre request has been submitted!")
            location.reload()
    
          })
        };




      })
      // $("#tasks-id").text(searchResult[0].id);
      // $("#tasks-name").text(searchResult[0].task_name);
      // $("#tasks-description").text(searchResult[0].task_description);
      // $("#tasks-status").text(searchResult[0].status);

    })

  })


  


  $(".customer-lookup").on("click", function (event) {
    event.preventDefault();
    console.log($(this).val())
    $(".customer-info-table").show();
    var customer = {
      id: $(this).val()
    }




    $.ajax("/api/customers/lookup/" + customer.id, {
      type: "GET"
    }).then(function (customerInfo) {
      console.log(customerInfo);
      $("#cust-name").text(customerInfo.customer_name);
      $("#cust-address").text(customerInfo.customer_address);
      $("#cust-acreage").text(customerInfo.acreage);
      $("#cust-description").text(customerInfo.customer_description);
      $("#cust-pricerange").text(customerInfo.pricerange);
      $("#cust-daterequested").text(customerInfo.createdAt);
      $("#cust-phone").text(customerInfo.customer_phone);
    })

  })

  $(".customer-delete").on("click", function (event) {
    event.preventDefault();
    console.log($(this).val());
    var deletedCustomer = {
      id: $(this).val()
    }

    var confirmDelete = confirm("Are you sure you want to delete this customer?");

    if (confirmDelete) {
      $.ajax("/api/customers/delete/" + deletedCustomer.id, {
        type: "POST"
      }).then(function (response) {
        alert("Youre request has been submitted!")
        location.reload()

      })
    };
    //   setTimeout(function(){
    //   location.reload()
    // }, 500)
  })








  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////










  //////////// Calculate Wages and Profits ////////////
  getJobsiteData = function (jobID, jobsiteID) {
    // var data1B;
    // var data2B;
    $.ajax("/api/jobs/" + jobID, {
      type: "GET"
    }).then(function (data) {
      // console.log(data);
      // console.log("current sales: " + data.sales);
      $.ajax("/api/jobsites/" + jobsiteID, {
        type: "GET"
      }).then(function (data2) {

        calculateJobsitePerformance(data, data2);
      })


    })
  }

  getSupervisorData = function (jobID, supervisorID) {
    $.ajax("/api/jobs/" + jobID, {
      type: "GET"
    }).then(function (data) {

      $.ajax("/api/supervisors/" + supervisorID, {
        type: "GET"
      }).then(function (data2) {
        calculateSupervisorPerformance(data, data2)
      })
    })
  }

  calculateJobsitePerformance = function (localData, globalData) {
    console.log("Local Data: " + JSON.stringify(localData));
    console.log("Global Data:" + JSON.stringify(globalData));

    var localRevenue = localData.project_bid;
    var localExpenses = localData.materialcosts + localData.wagecosts;
    var localProfits = localData.profit;

    var globalRevenue = globalData.location_revenue;
    var globalExpenses = globalData.location_expenses;
    var globalProfits = globalData.location_profits;

    var newRevenue = localRevenue + globalRevenue;
    var newExpenses = localExpenses + globalExpenses;
    var newProfits = localProfits + globalProfits;

    var jobsiteFinancialsObj = {
      id: globalData.id,
      location_expenses: newExpenses,
      location_revenue: newRevenue,
      location_profits: newProfits
    }

    $.ajax("/api/jobsites/", {
      type: "PUT",
      data: jobsiteFinancialsObj
    }).then(function () {
      console.log("Jobsite Table has been updated!");
      // location.reload();
    })

  }

  calculateSupervisorPerformance = function (localData, globalData) {
    console.log("Local Supervisor Data: " + JSON.stringify(localData));
    console.log("Global Supervisor Data: " + JSON.stringify(globalData));

    var localRevenue = localData.project_bid;
    var localExpenses = localData.materialcosts + localData.wagecosts;
    var localProfits = localData.profit;

    var globalRevenue = globalData.jobs_revenue;
    var globalExpenses = globalData.jobs_expenses;
    var globalProfits = globalData.jobs_profits;

    var newRevenue = localRevenue + globalRevenue;
    var newExpenses = localExpenses + globalExpenses;
    var newProfits = localProfits + globalProfits;

    var supervisorFinancialsObj = {
      id: globalData.id,
      jobs_expenses: newExpenses,
      jobs_revenue: newRevenue,
      jobs_profits: newProfits
    }

    $.ajax("/api/supervisors/", {
      type: "PUT",
      data: supervisorFinancialsObj
    }).then(function () {
      console.log("Supervisor Table has been updated!")
    })
  }


  // app.get("/view/manager", function (req, res) {
  //   var supervisorArray = [];
  //   var jobsiteArray = [];
  //   var managerObject = {
  //     supervisors: supervisorArray,
  //     jobsites: jobsiteArray
  //   }

  //   db.Supervisor.findAll({}
  //   ).then(function (data) {
  //     for (i = 0; i < data.length; i++) {
  //       (supervisorArray).push(data[i].dataValues);
  //     }
  //     db.Jobsite.findAll({}
  //     ).then(function (data2) {
  //       for (j = 0; j < data2.length; j++) {
  //         (jobsiteArray).push(data2[j].dataValues);
  //       }
  //       res.render("managerView", managerObject)
  //     })
  //   })

  // calculateWages = function (data) {
  //   console.log("Calculate wages will be using this data: " + JSON.stringify(data))
  //   var wages = data.hours * data.workers;
  //   console.log(wages)
  //   var wageObject = {
  //     id: data.id,
  //     wagecosts: wages
  //   }

  //   $.ajax("/api/foreman", {
  //     type: "PUT",
  //     data: wageObject
  //   }).then(function () {
  //     console.log("We've calculate wages and input that information for you into your table!");
  //     calculateProfit(data, wages);
  //   })

  // }

  calculateProfit = function (data, wages) {
    console.log("Calculating Profits using this data: " + JSON.stringify(data))


  };

});