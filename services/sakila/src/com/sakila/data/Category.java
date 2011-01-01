
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Category
 *  12/30/2010 11:24:18
 * 
 */
public class Category {

    private Byte categoryId;
    private String name;
    private Date lastUpdate;
    private Set<com.sakila.data.FilmCategory> filmCategories = new HashSet<com.sakila.data.FilmCategory>();

    public Byte getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Byte categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.FilmCategory> getFilmCategories() {
        return filmCategories;
    }

    public void setFilmCategories(Set<com.sakila.data.FilmCategory> filmCategories) {
        this.filmCategories = filmCategories;
    }

}
