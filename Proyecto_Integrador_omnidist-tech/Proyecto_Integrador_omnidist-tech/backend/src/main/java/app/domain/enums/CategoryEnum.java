package app.domain.enums;

public enum CategoryEnum {
    GAMING("Gaming / Consolas"),
    ELECTRONICS("Dispositivos Electrónicos"),
    SOFTWARE_HARDWARE("Software & Hardware");

    private final String value;

    CategoryEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}