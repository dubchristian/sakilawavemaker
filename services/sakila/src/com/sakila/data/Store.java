
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Store
 *  12/30/2010 11:24:18
 * 
 */
public class Store {

    private Byte storeId;
    private com.sakila.data.Staff staff;
    private Address address;
    private Date lastUpdate;
    private Set<com.sakila.data.Inventory> inventories = new HashSet<com.sakila.data.Inventory>();
    private Set<com.sakila.data.Customer> customers = new HashSet<com.sakila.data.Customer>();
    private Set<com.sakila.data.Staff> staffs = new HashSet<com.sakila.data.Staff>();

    public Byte getStoreId() {
        return storeId;
    }

    public void setStoreId(Byte storeId) {
        this.storeId = storeId;
    }

    public com.sakila.data.Staff getStaff() {
        return staff;
    }

    public void setStaff(com.sakila.data.Staff staff) {
        this.staff = staff;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(Set<com.sakila.data.Inventory> inventories) {
        this.inventories = inventories;
    }

    public Set<com.sakila.data.Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<com.sakila.data.Customer> customers) {
        this.customers = customers;
    }

    public Set<com.sakila.data.Staff> getStaffs() {
        return staffs;
    }

    public void setStaffs(Set<com.sakila.data.Staff> staffs) {
        this.staffs = staffs;
    }

}
