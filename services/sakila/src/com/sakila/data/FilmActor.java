
package com.sakila.data;

import java.util.Date;


/**
 *  sakila.FilmActor
 *  12/30/2010 11:24:18
 * 
 */
public class FilmActor {

    private FilmActorId id;
    private Actor actor;
    private Film film;
    private Date lastUpdate;

    public FilmActorId getId() {
        return id;
    }

    public void setId(FilmActorId id) {
        this.id = id;
    }

    public Actor getActor() {
        return actor;
    }

    public void setActor(Actor actor) {
        this.actor = actor;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

}
