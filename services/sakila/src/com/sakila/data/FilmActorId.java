
package com.sakila.data;

import java.io.Serializable;


/**
 *  sakila.FilmActorId
 *  12/30/2010 11:24:18
 * 
 */
public class FilmActorId
    implements Serializable
{

    private Short actorId;
    private Short filmId;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof FilmActorId)) {
            return false;
        }
        FilmActorId other = ((FilmActorId) o);
        if (this.actorId == null) {
            if (other.actorId!= null) {
                return false;
            }
        } else {
            if (!this.actorId.equals(other.actorId)) {
                return false;
            }
        }
        if (this.filmId == null) {
            if (other.filmId!= null) {
                return false;
            }
        } else {
            if (!this.filmId.equals(other.filmId)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.actorId!= null) {
            rtn = (rtn + this.actorId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.filmId!= null) {
            rtn = (rtn + this.filmId.hashCode());
        }
        return rtn;
    }

    public Short getActorId() {
        return actorId;
    }

    public void setActorId(Short actorId) {
        this.actorId = actorId;
    }

    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

}
