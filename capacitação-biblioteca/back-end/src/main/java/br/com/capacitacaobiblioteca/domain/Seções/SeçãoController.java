package br.com.capacitacaobiblioteca.domain.Seções;

import br.com.capacitacaobiblioteca.core.Controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seção")
public class SeçãoController extends AbstractController<Seção> {
}
