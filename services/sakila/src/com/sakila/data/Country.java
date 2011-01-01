
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Country
 *  12/30/2010 11:24:18
 * 
 */
public class Country {

    private Short countryId;
    private String country;
    private Date lastUpdate;
    private Set<com.sakila.data.City> cities = new HashSet<com.sakila.data.City>();

    public Short getCountryId() {
        return countryId;
    }

    public void setCountryId(Short countryId) {
        this.countryId = countryId;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.City> getCities() {
        return cities;
    }

    public void setCities(Set<com.sakila.data.City> cities) {
        this.cities = cities;
    }

}
