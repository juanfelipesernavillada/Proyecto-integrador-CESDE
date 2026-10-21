package com.omnidist.tech.model;

/** A staff member with employee-specific contact and job information. */
public class Employee extends User {
    private String identification;
    private String position;
    private String phone;

    public Employee() {
        super();
    }

    public Employee(Long id, String name, String email, String passwordHash,
                   String identification, String position, String phone,
                   boolean active) {
        super(id, name, email, passwordHash, active);
        this.identification = identification;
        this.position = position;
        this.phone = phone;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String getRole() {
        return "EMPLOYEE";
    }
}
