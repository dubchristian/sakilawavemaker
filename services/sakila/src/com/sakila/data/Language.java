
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Language
 *  12/30/2010 11:24:18
 * 
 */
public class Language {

    private Byte languageId;
    private String name;
    private Date lastUpdate;
    private Set<com.sakila.data.Film> filmsForOriginalLanguageId = new HashSet<com.sakila.data.Film>();
    private Set<com.sakila.data.Film> filmsForLanguageId = new HashSet<com.sakila.data.Film>();

    public Byte getLanguageId() {
        return languageId;
    }

    public void setLanguageId(Byte languageId) {
        this.languageId = languageId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.Film> getFilmsForOriginalLanguageId() {
        return filmsForOriginalLanguageId;
    }

    public void setFilmsForOriginalLanguageId(Set<com.sakila.data.Film> filmsForOriginalLanguageId) {
        this.filmsForOriginalLanguageId = filmsForOriginalLanguageId;
    }

    public Set<com.sakila.data.Film> getFilmsForLanguageId() {
        return filmsForLanguageId;
    }

    public void setFilmsForLanguageId(Set<com.sakila.data.Film> filmsForLanguageId) {
        this.filmsForLanguageId = filmsForLanguageId;
    }

}
