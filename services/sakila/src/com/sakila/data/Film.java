
package com.sakila.data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Film
 *  12/30/2010 11:24:18
 * 
 */
public class Film {

    private Short filmId;
    private com.sakila.data.Language languageByOriginalLanguageId;
    private com.sakila.data.Language languageByLanguageId;
    private String title;
    private String description;
    private Date releaseYear;
    private Byte rentalDuration;
    private BigDecimal rentalRate;
    private Short length;
    private BigDecimal replacementCost;
    private String rating;
    private String specialFeatures;
    private Date lastUpdate;
    private Set<com.sakila.data.FilmActor> filmActors = new HashSet<com.sakila.data.FilmActor>();
    private Set<com.sakila.data.FilmCategory> filmCategories = new HashSet<com.sakila.data.FilmCategory>();
    private Set<com.sakila.data.Inventory> inventories = new HashSet<com.sakila.data.Inventory>();

    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

    public com.sakila.data.Language getLanguageByOriginalLanguageId() {
        return languageByOriginalLanguageId;
    }

    public void setLanguageByOriginalLanguageId(com.sakila.data.Language languageByOriginalLanguageId) {
        this.languageByOriginalLanguageId = languageByOriginalLanguageId;
    }

    public com.sakila.data.Language getLanguageByLanguageId() {
        return languageByLanguageId;
    }

    public void setLanguageByLanguageId(com.sakila.data.Language languageByLanguageId) {
        this.languageByLanguageId = languageByLanguageId;
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

    public Date getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Date releaseYear) {
        this.releaseYear = releaseYear;
    }

    public Byte getRentalDuration() {
        return rentalDuration;
    }

    public void setRentalDuration(Byte rentalDuration) {
        this.rentalDuration = rentalDuration;
    }

    public BigDecimal getRentalRate() {
        return rentalRate;
    }

    public void setRentalRate(BigDecimal rentalRate) {
        this.rentalRate = rentalRate;
    }

    public Short getLength() {
        return length;
    }

    public void setLength(Short length) {
        this.length = length;
    }

    public BigDecimal getReplacementCost() {
        return replacementCost;
    }

    public void setReplacementCost(BigDecimal replacementCost) {
        this.replacementCost = replacementCost;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getSpecialFeatures() {
        return specialFeatures;
    }

    public void setSpecialFeatures(String specialFeatures) {
        this.specialFeatures = specialFeatures;
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

    public Set<com.sakila.data.FilmCategory> getFilmCategories() {
        return filmCategories;
    }

    public void setFilmCategories(Set<com.sakila.data.FilmCategory> filmCategories) {
        this.filmCategories = filmCategories;
    }

    public Set<com.sakila.data.Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(Set<com.sakila.data.Inventory> inventories) {
        this.inventories = inventories;
    }

}
