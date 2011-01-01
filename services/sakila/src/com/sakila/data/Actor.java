
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Actor
 *  12/30/2010 11:24:18
 * 
 */
public class Actor {

    private Short actorId;
    private String firstName;
    private String lastName;
    private Date lastUpdate;
    private Set<com.sakila.data.FilmActor> filmActors = new HashSet<com.sakila.data.FilmActor>();

    public Short getActorId() {
        return actorId;
    }

    public void setActorId(Short actorId) {
        this.actorId = actorId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.FilmActor> getFilmActors() {
        return filmActors;
    }

    public void setFilmActors(Set<com.sakila.data.FilmActor> filmActors) {
        this.filmActors = filmActors;
    }

}
