
package com.sakila.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  sakila.SalesByFilmCategoryId
 *  12/30/2010 11:24:18
 * 
 */
public class SalesByFilmCategoryId
    implements Serializable
{

    private String category;
    private BigDecimal totalSales;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof SalesByFilmCategoryId)) {
            return false;
        }
        SalesByFilmCategoryId other = ((SalesByFilmCategoryId) o);
        if (this.category == null) {
            if (other.category!= null) {
                return false;
            }
        } else {
            if (!this.category.equals(other.category)) {
                return false;
            }
        }
        if (this.totalSales == null) {
            if (other.totalSales!= null) {
                return false;
            }
        } else {
            if (!this.totalSales.equals(other.totalSales)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.category!= null) {
            rtn = (rtn + this.category.hashCode());
        }
        rtn = (rtn* 37);
        if (this.totalSales!= null) {
            rtn = (rtn + this.totalSales.hashCode());
        }
        return rtn;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(BigDecimal totalSales) {
        this.totalSales = totalSales;
    }

}
