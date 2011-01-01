
package com.sakila.data;

import java.util.Date;


/**
 *  sakila.FilmCategory
 *  12/30/2010 11:24:18
 * 
 */
public class FilmCategory {

    private FilmCategoryId id;
    private Film film;
    private Category category;
    private Date lastUpdate;

    public FilmCategoryId getId() {
        return id;
    }

    public void setId(FilmCategoryId id) {
        this.id = id;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

}
