
package com.sakila.data;

import java.io.Serializable;


/**
 *  sakila.CustomerListId
 *  12/30/2010 11:24:18
 * 
 */
public class CustomerListId
    implements Serializable
{

    private Short id;
    private String name;
    private String address;
    private String zipCode;
    private String phone;
    private String city;
    private String country;
    private String notes;
    private Byte sid;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof CustomerListId)) {
            return false;
        }
        CustomerListId other = ((CustomerListId) o);
        if (this.id == null) {
            if (other.id!= null) {
                return false;
            }
        } else {
            if (!this.id.equals(other.id)) {
                return false;
            }
        }
        if (this.name == null) {
            if (other.name!= null) {
                return false;
            }
        } else {
            if (!this.name.equals(other.name)) {
                return false;
            }
        }
        if (this.address == null) {
            if (other.address!= null) {
                return false;
            }
        } else {
            if (!this.address.equals(other.address)) {
                return false;
            }
        }
        if (this.zipCode == null) {
            if (other.zipCode!= null) {
                return false;
            }
        } else {
            if (!this.zipCode.equals(other.zipCode)) {
                return false;
            }
        }
        if (this.phone == null) {
            if (other.phone!= null) {
                return false;
            }
        } else {
            if (!this.phone.equals(other.phone)) {
                return false;
            }
        }
        if (this.city == null) {
            if (other.city!= null) {
                return false;
            }
        } else {
            if (!this.city.equals(other.city)) {
                return false;
            }
        }
        if (this.country == null) {
            if (other.country!= null) {
                return false;
            }
        } else {
            if (!this.country.equals(other.country)) {
                return false;
            }
        }
        if (this.notes == null) {
            if (other.notes!= null) {
                return false;
            }
        } else {
            if (!this.notes.equals(other.notes)) {
                return false;
            }
        }
        if (this.sid == null) {
            if (other.sid!= null) {
                return false;
            }
        } else {
            if (!this.sid.equals(other.sid)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.id!= null) {
            rtn = (rtn + this.id.hashCode());
        }
        rtn = (rtn* 37);
        if (this.name!= null) {
            rtn = (rtn + this.name.hashCode());
        }
        rtn = (rtn* 37);
        if (this.address!= null) {
            rtn = (rtn + this.address.hashCode());
        }
        rtn = (rtn* 37);
        if (this.zipCode!= null) {
            rtn = (rtn + this.zipCode.hashCode());
        }
        rtn = (rtn* 37);
        if (this.phone!= null) {
            rtn = (rtn + this.phone.hashCode());
        }
        rtn = (rtn* 37);
        if (this.city!= null) {
            rtn = (rtn + this.city.hashCode());
        }
        rtn = (rtn* 37);
        if (this.country!= null) {
            rtn = (rtn + this.country.hashCode());
        }
        rtn = (rtn* 37);
        if (this.notes!= null) {
            rtn = (rtn + this.notes.hashCode());
        }
        rtn = (rtn* 37);
        if (this.sid!= null) {
            rtn = (rtn + this.sid.hashCode());
        }
        return rtn;
    }

    public Short getId() {
        return id;
    }

    public void setId(Short id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Byte getSid() {
        return sid;
    }

    public void setSid(Byte sid) {
        this.sid = sid;
    }

}
