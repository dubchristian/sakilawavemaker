
package com.sakila.data;

import java.io.Serializable;
import java.math.BigDecimal;


/**
 *  sakila.SalesByStoreId
 *  12/30/2010 11:24:18
 * 
 */
public class SalesByStoreId
    implements Serializable
{

    private String store;
    private String manager;
    private BigDecimal totalSales;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof SalesByStoreId)) {
            return false;
        }
        SalesByStoreId other = ((SalesByStoreId) o);
        if (this.store == null) {
            if (other.store!= null) {
                return false;
            }
        } else {
            if (!this.store.equals(other.store)) {
                return false;
            }
        }
        if (this.manager == null) {
            if (other.manager!= null) {
                return false;
            }
        } else {
            if (!this.manager.equals(other.manager)) {
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
        if (this.store!= null) {
            rtn = (rtn + this.store.hashCode());
        }
        rtn = (rtn* 37);
        if (this.manager!= null) {
            rtn = (rtn + this.manager.hashCode());
        }
        rtn = (rtn* 37);
        if (this.totalSales!= null) {
            rtn = (rtn + this.totalSales.hashCode());
        }
        return rtn;
    }

    public String getStore() {
        return store;
    }

    public void setStore(String store) {
        this.store = store;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public BigDecimal getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(BigDecimal totalSales) {
        this.totalSales = totalSales;
    }

}
