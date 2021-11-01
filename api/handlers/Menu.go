package handlers

import (
	"log"
	"net/http"
	"resturant/api/database"
	"resturant/api/library"
	"resturant/api/models"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v10"
)

func Menu(c *gin.Context) {
	var (
		db  *pg.DB
		err error
		res models.Response
	)
	// establish connection to database
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	menuItems := &[]database.MenuItem{}
	if err = db.Model(menuItems).Select(); err != nil {
		log.Println(err)
		if err.Error() == "pg: no rows in result set" {
			res.StatusCode = http.StatusNotFound
			res.Message = "No Items Found."
		} else {
			res.StatusCode = http.StatusInternalServerError
			res.Message = "Error"
		}
	} else {
		res.StatusCode = http.StatusOK
		res.Status = true
		res.PayLoad = menuItems
	}

	library.BuildResponse(c, res)
}

func MenuImage(c *gin.Context) {
	var (
		db  *pg.DB
		err error
		res models.Response
	)
	// establish connection to database
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	menuItems := &[]database.ItemImages{}
	if err = db.Model(menuItems).Select(); err != nil {
		log.Println(err)
		if err.Error() == "pg: no rows in result set" {
			res.StatusCode = http.StatusNotFound
			res.Message = "No Items Images Found."
		} else {
			res.StatusCode = http.StatusInternalServerError
			res.Message = "Error"
		}
	} else {
		res.StatusCode = http.StatusOK
		res.Status = true
		res.PayLoad = menuItems
	}

	library.BuildResponse(c, res)
}

func ItemImage(c *gin.Context) {
	var (
		db     *pg.DB
		err    error
		res    models.Response
		itemID int
	)
	// establish connection to database
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	itemID, _ = strconv.Atoi(c.Param("itemID"))

	item := &database.ItemImages{}
	if err = db.Model(item).Where("fk_menu_item_id = ? ", itemID).Select(); err != nil {
		log.Println(err)
		if err.Error() == "pg: no rows in result set" {
			res.StatusCode = http.StatusNotFound
			res.Message = "Invalid Item ID/Image Does Not Exists"
		} else {
			res.StatusCode = http.StatusInternalServerError
			res.Message = "Error"
		}
	} else {
		res.StatusCode = http.StatusOK
		res.Status = true
		res.PayLoad = item
	}

	library.BuildResponse(c, res)
}

func Item(c *gin.Context) {
	var (
		db     *pg.DB
		err    error
		res    models.Response
		itemID int
	)
	// establish connection to database
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	itemID, _ = strconv.Atoi(c.Param("itemID"))

	item := &database.MenuItem{}
	if err = db.Model(item).Where("id = ? ", itemID).Select(); err != nil {
		log.Println(err)
		if err.Error() == "pg: no rows in result set" {
			res.StatusCode = http.StatusNotFound
			res.Message = "Invalid Item ID"
		} else {
			res.StatusCode = http.StatusInternalServerError
			res.Message = "Error"
		}
	} else {
		res.StatusCode = http.StatusOK
		res.Status = true
		res.PayLoad = item
	}

	library.BuildResponse(c, res)
}
