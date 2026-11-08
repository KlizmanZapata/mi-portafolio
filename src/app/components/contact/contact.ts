
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import emailjs from '@emailjs/browser';

import { Reveal } from '../../directives/reveal';
import { EMAILJS_CONFIG } from '../../config/emailjs.config';

type FormStatus = 'success' | 'error' | null;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  isSending = false;
  formStatus: FormStatus = null;

  readonly contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/\S/),
        Validators.minLength(2),
        Validators.maxLength(80)
      ]
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(254)
      ]
    }),

    message: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/\S/),
        Validators.minLength(10),
        Validators.maxLength(1500)
      ]
    })
  });

  readonly contactLinks = [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/klizmanzapata',
      url: 'https://linkedin.com/in/klizmanzapata',
      icon: 'linkedin'
    },
    {
      label: 'GitHub',
      value: 'github.com/KlizmanZapata',
      url: 'https://github.com/KlizmanZapata',
      icon: 'github'
    },
    {
      label: 'Teléfono',
      value: '+57 318 870 5724',
      url: 'tel:+573188705724',
      icon: 'phone'
    },
    {
      label: 'WhatsApp',
      value: 'Enviar mensaje por WhatsApp',
      url: 'https://wa.me/573188705724',
      icon: 'whatsapp'
    }
  ];

  async onSubmit(): Promise<void> {

    if (this.isSending) {
      return;
    }

    this.formStatus = null;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    const formValues = this.contactForm.getRawValue();

    const templateParams = {
      from_name: formValues.name.trim(),
      from_email: formValues.email.trim(),
      message: formValues.message.trim()
    };

    try {

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        {
          publicKey: EMAILJS_CONFIG.publicKey
        }
      );

      this.formStatus = 'success';
      this.contactForm.reset();

    } catch (error) {

      console.error('Error al enviar el correo:', error);
      this.formStatus = 'error';

    } finally {

      this.isSending = false;

    }
  }
}
