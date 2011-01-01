
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.City
 *  12/30/2010 11:24:18
 * 
 */
public class City {

    private Short cityId;
    private Country country;
    private String city;
    private Date lastUpdate;
    private Set<com.sakila.data.Address> addresses = new HashSet<com.sakila.data.Address>();

    public Short getCityId() {
        return cityId;
    }

    public void setCityId(Short cityId) {
        this.cityId = cityId;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<com.sakila.data.Address> addresses) {
        this.addresses = addresses;
    }

}
