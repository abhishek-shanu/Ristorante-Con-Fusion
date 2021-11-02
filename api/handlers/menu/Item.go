package menu

import (
	"resturant/api/database"
	"resturant/api/library"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v10"
)

//handler for request to get the details of any particular item
func Item(c *gin.Context) {
	var (
		db     *pg.DB
		err    error
		itemID int
	)

	// establish connection to database
	if db, err = library.GetDB(); err != nil {
		return
	}
	defer db.Close()

	itemID, _ = strconv.Atoi(c.Param("itemID"))

	item := &database.MenuItem{}
	err = db.Model(item).Where("id = ? ", itemID).Select()
	library.BuildResponse(c, item, "Invalid Item ID", err)
}
