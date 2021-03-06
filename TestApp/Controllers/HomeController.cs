﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AlohaKumu.Models;
using TestApp.Models;

namespace AlohaKumu.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index( FormCollection form )
        {
            DataAccessor data = new DataAccessor();
            String username = form["username"];
            String password = form["password"];
            if (!data.isUser(username))
            {
                Session["Error"] = "No such user: " + username;
                return RedirectToAction("Error");
            }
            User current = data.login(username, password);
            if (current == null)
            {
                Session["Error"] = "Invalid password";
                return RedirectToAction("Error");
            }
            Session["User"] = current;
            return View();
        }

        public ActionResult Admin()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Admin(FormCollection form)
        {
            DataAccessor data = new DataAccessor();
            String username = form["username"];
            String password = form["password"];
            if (!data.isAdmin(username))
            {
                Session["Error"] = "No such user: " + username;
                return RedirectToAction("Error");
            }
            Admin current = data.loginAdmin(username, password);
            if (current == null)
            {
                Session["Error"] = "Invalid password";
                return RedirectToAction("Error");
            }
            Session["User"] = current;
            return View();
        }

        public ActionResult LogOff()
        {
            Session["User"] = null;
            return RedirectToAction("Index");
        }

        public ActionResult Error()
        {
            return View();
        }
    }
}
