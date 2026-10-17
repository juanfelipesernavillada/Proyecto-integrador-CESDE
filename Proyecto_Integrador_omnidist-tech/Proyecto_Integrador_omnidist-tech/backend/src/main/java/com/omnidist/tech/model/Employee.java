
package com.omnidist.tech.model;

public class Employee {
    private Long id;
    private String name;
    private String email;
    private String identification;
    private String position;
    private String phone;
    private boolean active;

    public Employee() {
    }

    public Employee(Long id, String name, String email,
                    String identification, String position,
                    String phone, boolean active) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.identification = identification;
        this.position = position;
        this.phone = phone;
        this.active = active;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getIdentification() { return identification; }
    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getPosition() { return position; }
    public void setPosition(String position) {
        this.position = position;
    }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) {
        this.active = active;
    }
}
