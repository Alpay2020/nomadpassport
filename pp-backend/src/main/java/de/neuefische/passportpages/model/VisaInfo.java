package de.neuefische.passportpages.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisaInfo {

    @Id
    private String id;
    private String citizenship;
    private String destination;
    private String visaType;
    private String visaFreeDay;
    private String visaFee;
    private String paidForDay;

}
