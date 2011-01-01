
package com.sakila.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  sakila.NicerButSlowerFilmListId
 *  12/30/2010 11:24:18
 * 
 */
public class NicerButSlowerFilmListId
    implements Serializable
{

    private Short fid;
    private String title;
    private String description;
    private String category;
    private BigDecimal price;
    private Short length;
    private String rating;
    private String actors;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof NicerButSlowerFilmListId)) {
            return false;
        }
        NicerButSlowerFilmListId other = ((NicerButSlowerFilmListId) o);
        if (this.fid == null) {
            if (other.fid!= null) {
                return false;
            }
        } else {
            if (!this.fid.equals(other.fid)) {
                return false;
            }
        }
        if (this.title == null) {
            if (other.title!= null) {
                return false;
            }
        } else {
            if (!this.title.equals(other.title)) {
                return false;
            }
        }
        if (this.description == null) {
            if (other.description!= null) {
                return false;
            }
        } else {
            if (!this.description.equals(other.description)) {
                return false;
            }
        }
        if (this.category == null) {
            if (other.category!= null) {
                return false;
            }
        } else {
            if (!this.category.equals(other.category)) {
                return false;
            }
        }
        if (this.price == null) {
            if (other.price!= null) {
                return false;
            }
        } else {
            if (!this.price.equals(other.price)) {
                return false;
            }
        }
        if (this.length == null) {
            if (other.length!= null) {
                return false;
            }
        } else {
            if (!this.length.equals(other.length)) {
                return false;
            }
        }
        if (this.rating == null) {
            if (other.rating!= null) {
                return false;
            }
        } else {
            if (!this.rating.equals(other.rating)) {
                return false;
            }
        }
        if (this.actors == null) {
            if (other.actors!= null) {
                return false;
            }
        } else {
            if (!this.actors.equals(other.actors)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.fid!= null) {
            rtn = (rtn + this.fid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.title!= null) {
            rtn = (rtn + this.title.hashCode());
        }
        rtn = (rtn* 37);
        if (this.description!= null) {
            rtn = (rtn + this.description.hashCode());
        }
        rtn = (rtn* 37);
        if (this.category!= null) {
            rtn = (rtn + this.category.hashCode());
        }
        rtn = (rtn* 37);
        if (this.price!= null) {
            rtn = (rtn + this.price.hashCode());
        }
        rtn = (rtn* 37);
        if (this.length!= null) {
            rtn = (rtn + this.length.hashCode());
        }
        rtn = (rtn* 37);
        if (this.rating!= null) {
            rtn = (rtn + this.rating.hashCode());
        }
        rtn = (rtn* 37);
        if (this.actors!= null) {
            rtn = (rtn + this.actors.hashCode());
        }
        return rtn;
    }

    public Short getFid() {
        return fid;
    }

    public void setFid(Short fid) {
        this.fid = fid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Short getLength() {
        return length;
    }

    public void setLength(Short length) {
        this.length = length;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

}
