
package com.example.sample.contactbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    private ContactRepository repository;

    @GetMapping
    public List<Contact> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Contact create(@RequestBody Contact contact) {
        return repository.save(contact);
    }

    @PutMapping("/{id}")
    public Contact update(@PathVariable Long id, @RequestBody Contact contact) {
        Contact existing = repository.findById(id).orElseThrow();
        existing.setName(contact.getName());
        existing.setEmail(contact.getEmail());
        existing.setPhone(contact.getPhone());
        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
