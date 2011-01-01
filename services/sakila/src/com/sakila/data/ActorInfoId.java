
package com.sakila.data;

import java.io.Serializable;


/**
 *  sakila.ActorInfoId
 *  12/30/2010 11:24:18
 * 
 */
public class ActorInfoId
    implements Serializable
{

    private Short actorId;
    private String firstName;
    private String lastName;
    private String filmInfo;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ActorInfoId)) {
            return false;
        }
        ActorInfoId other = ((ActorInfoId) o);
        if (this.actorId == null) {
            if (other.actorId!= null) {
                return false;
            }
        } else {
            if (!this.actorId.equals(other.actorId)) {
                return false;
            }
        }
        if (this.firstName == null) {
            if (other.firstName!= null) {
                return false;
            }
        } else {
            if (!this.firstName.equals(other.firstName)) {
                return false;
            }
        }
        if (this.lastName == null) {
            if (other.lastName!= null) {
                return false;
            }
        } else {
            if (!this.lastName.equals(other.lastName)) {
                return false;
            }
        }
        if (this.filmInfo == null) {
            if (other.filmInfo!= null) {
                return false;
            }
        } else {
            if (!this.filmInfo.equals(other.filmInfo)) {
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
        if (this.firstName!= null) {
            rtn = (rtn + this.firstName.hashCode());
        }
        rtn = (rtn* 37);
        if (this.lastName!= null) {
            rtn = (rtn + this.lastName.hashCode());
        }
        rtn = (rtn* 37);
        if (this.filmInfo!= null) {
            rtn = (rtn + this.filmInfo.hashCode());
        }
        return rtn;
    }

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

    public String getFilmInfo() {
        return filmInfo;
    }

    public void setFilmInfo(String filmInfo) {
        this.filmInfo = filmInfo;
    }

}
