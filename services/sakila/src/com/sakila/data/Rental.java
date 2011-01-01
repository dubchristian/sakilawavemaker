
package com.sakila.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakila.Rental
 *  12/30/2010 11:24:18
 * 
 */
public class Rental {

    private Integer rentalId;
    private Staff staff;
    private Customer customer;
    private Inventory inventory;
    private Date rentalDate;
    private Date returnDate;
    private Date lastUpdate;
    private Set<com.sakila.data.Payment> payments = new HashSet<com.sakila.data.Payment>();

    public Integer getRentalId() {
        return rentalId;
    }

    public void setRentalId(Integer rentalId) {
        this.rentalId = rentalId;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Inventory getInventory() {
        return inventory;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public Date getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(Date rentalDate) {
        this.rentalDate = rentalDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakila.data.Payment> getPayments() {
        return payments;
    }

    public void setPayments(Set<com.sakila.data.Payment> payments) {
        this.payments = payments;
    }

}
