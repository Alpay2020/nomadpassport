package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.model.VisaInfo;
import de.neuefische.passportpages.service.VisaInfoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("api/visainfo")
public class VisaInfoController {

    private final VisaInfoService visaInfoService;

    public VisaInfoController(VisaInfoService visaInfoService) {
        this.visaInfoService = visaInfoService;
    }
    @GetMapping("{destination}")
    public VisaInfo getVisaInfoByDestination(@PathVariable String destination) {
        Optional<VisaInfo> visaInfoOptional = visaInfoService.getVisaInfo(destination);
        if (visaInfoOptional.isPresent()) {
            return visaInfoOptional.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "visa information about " + destination + " does not exist");
    }
}
