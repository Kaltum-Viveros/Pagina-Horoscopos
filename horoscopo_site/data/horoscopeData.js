// Archivo de datos de signos zodiacales (solo lectura en cliente)
// Se expone como variable global HOROSCOPE_DATA para facilitar uso sin servidor.
window.HOROSCOPE_DATA = {
  "Aries": {
    "symbol": "♈", "dates": "21 Mar — 19 Abr",
    "traits": ["Impulso", "Iniciativa", "Valentía"],
    "messages": {
      "amor": ["Una conversación honesta despeja malentendidos.", "Atrévete a dar el primer paso.", "El cariño crece cuando impones límites sanos."],
      "salud": ["Toma agua extra hoy.", "Respira profundo antes de reaccionar.", "Camina 20 minutos para despejar la mente."],
      "dinero": ["Revisa pequeños gastos: ahí está la fuga.", "Postergar una compra será acertado.", "Un contacto te trae una idea rentable."],
      "consejo": ["No hagas todo a la vez; prioriza.", "Tu energía es tu activo: cuídala.", "Escucha antes de decidir."]
    }
  },
  "Tauro": {
    "symbol": "♉", "dates": "20 Abr — 20 May",
    "traits": ["Constancia", "Practicidad", "Sensatez"],
    "messages": {
      "amor": ["Plan casero supera a la salida cara.", "La paciencia será tu mayor gesto romántico.", "Demuestra con hechos, no con prisa."],
      "salud": ["Atiende el descanso: duerme media hora más.", "Estira cuello y hombros.", "Equilibra antojos con fruta."],
      "dinero": ["Pequeño ahorro hoy, gran respiro mañana.", "Negocia con calma: lograrás mejores términos.", "Compara precios antes de pagar."],
      "consejo": ["Lo simple funciona.", "Mantén la ruta: avanza un paso a la vez.", "Cuida tu espacio: orden = claridad."]
    }
  },
  "Géminis": {
    "symbol": "♊", "dates": "21 May — 20 Jun",
    "traits": ["Curiosidad", "Ingenio", "Adaptabilidad"],
    "messages": {
      "amor": ["Mensaje inesperado ilumina tu día.", "Juega y ríe: conecta mejor.", "Evita discutir por detalles."],
      "salud": ["Baja el café después del mediodía.", "Cambia de ambiente para recargar.", "Lee 10 minutos algo que te inspire."],
      "dinero": ["Idea lateral resuelve un problema.", "Aprende una herramienta y se abre una puerta.", "Evita compras por impulso online."],
      "consejo": ["Simplifica tu lista a 3 tareas.", "Pregunta más, asume menos.", "Tu versatilidad es ventaja: úsala."]
    }
  },
  "Cáncer": {
    "symbol": "♋", "dates": "21 Jun — 22 Jul",
    "traits": ["Intuición", "Cuidado", "Lealtad"],
    "messages": {
      "amor": ["Alguien valora tu escucha profunda.", "Cocina algo para compartir.", "Protege tu sensibilidad con límites claros."],
      "salud": ["Sopa o té calientito reconforta.", "Escribe lo que sientes, libera presión.", "Hidrátate mejor en la tarde."],
      "dinero": ["Hogar primero: repara algo pendiente.", "Planifica un fondo de tranquilidad.", "Una alianza cercana rinde frutos."],
      "consejo": ["Confía en tu intuición, pero verifica.", "Tu refugio es tu motor.", "Cuídate para poder cuidar."]
    }
  },
  "Leo": {
    "symbol": "♌", "dates": "23 Jul — 22 Ago",
    "traits": ["Creatividad", "Carisma", "Lealtad"],
    "messages": {
      "amor": ["Elogia de corazón: brillarás juntos.", "Un detalle sorprendente enciende la chispa.", "Evita dramatizar: busca la risa."],
      "salud": ["Muévete con música 15 minutos.", "Sol con protección mejora tu ánimo.", "Modera azúcares por la tarde."],
      "dinero": ["Presenta tu idea con seguridad.", "Un reconocimiento puede convertirse en oportunidad.", "Mantén un presupuesto visible."],
      "consejo": ["Brilla sin opacar.", "Lidera sirviendo.", "Recuerda: constancia supera inspiración."]
    }
  },
  "Virgo": {
    "symbol": "♍", "dates": "23 Ago — 22 Sep",
    "traits": ["Detalle", "Servicio", "Disciplina"],
    "messages": {
      "amor": ["Un gesto práctico habla de amor.", "Sé amable con tus propias imperfecciones.", "Organicen juntos para disfrutar más."],
      "salud": ["Plan de comida simple te ayudará.", "Micro-pauses de 3 min mejoran foco.", "Respira 4-4-6 tres veces."],
      "dinero": ["Checklist = cero errores costosos.", "Mejora un proceso y ahorra tiempo.", "No postergues ese correo clave."],
      "consejo": ["Perfección útil, no absoluta.", "Ordena primero lo pequeño.", "Celebra avances, no solo metas."]
    }
  },
  "Libra": {
    "symbol": "♎", "dates": "23 Sep — 22 Oct",
    "traits": ["Equilibrio", "Diplomacia", "Estética"],
    "messages": {
      "amor": ["Un acuerdo justo fortalece la relación.", "Escucha activa antes de responder.", "Un paseo bonito cambia el tono."],
      "salud": ["Estiramientos suaves por la mañana.", "Evita sobrecarga social hoy.", "Infusión relajante por la noche."],
      "dinero": ["Evalúa pros y contras con calma.", "Negocia: hay terreno medio.", "Un gasto en estética rinde ánimo."],
      "consejo": ["La armonía se construye.", "Di no con elegancia.", "Belleza también es funcionalidad."]
    }
  },
  "Escorpio": {
    "symbol": "♏", "dates": "23 Oct — 21 Nov",
    "traits": ["Intensidad", "Transformación", "Lealtad profunda"],
    "messages": {
      "amor": ["La franqueza sana cierra un ciclo.", "Intimidad es también paciencia.", "Confía, pero establece acuerdos."],
      "salud": ["Descansa a tiempo para renovar.", "Cierra ventanas mentales antes de dormir.", "Evita extremo y elige balance."],
      "dinero": ["Investiga a fondo antes de invertir.", "Un cambio estratégico te favorece.", "Protege datos y contraseñas."],
      "consejo": ["Transforma, no destruyas.", "Tu enfoque es poder.", "Renueva lo que ya no sirve."]
    }
  },
  "Sagitario": {
    "symbol": "♐", "dates": "22 Nov — 21 Dic",
    "traits": ["Optimismo", "Aventura", "Filosofía"],
    "messages": {
      "amor": ["Plan espontáneo une corazones.", "Sé claro con tus expectativas.", "El humor resuelve tensiones."],
      "salud": ["Movimiento al aire libre te recarga.", "Bebe más agua en la tarde.", "Estira piernas y cadera."],
      "dinero": ["Aprendizaje hoy, ganancias mañana.", "Viaje corto se puede planear mejor.", "Evita prometer más de lo posible."],
      "consejo": ["Apunta alto con paso firme.", "Libertad con responsabilidad.", "Comparte tu visión con humildad."]
    }
  },
  "Capricornio": {
    "symbol": "♑", "dates": "22 Dic — 19 Ene",
    "traits": ["Ambición", "Responsabilidad", "Paciencia"],
    "messages": {
      "amor": ["Muestra ternura en lo cotidiano.", "Un plan a largo plazo une.", "Reconoce esfuerzos mutuos."],
      "salud": ["Chequea tu postura al trabajar.", "Agenda descanso: también es productividad.", "Incluye proteína limpia hoy."],
      "dinero": ["Paso a paso, construyes cimientos.", "Documenta acuerdos y evita confusiones.", "Paga primero lo importante."],
      "consejo": ["Constancia > intensidad.", "Define límites de trabajo.", "Celebra cada hito, por pequeño."]
    }
  },
  "Acuario": {
    "symbol": "♒", "dates": "20 Ene — 18 Feb",
    "traits": ["Originalidad", "Humanidad", "Independencia"],
    "messages": {
      "amor": ["Se atraen mentes curiosas: conversa.", "Sorprende con un detalle distinto.", "Evita el desapego excesivo."],
      "salud": ["Descanso digital por una hora.", "Explora una rutina nueva.", "Respira al ritmo 4-7-8."],
      "dinero": ["Colabora: la comunidad te impulsa.", "Automatiza una tarea y gana tiempo.", "Idea fuera de la caja te beneficia."],
      "consejo": ["Sé tú, sin perder empatía.", "Innovar también es simplificar.", "Comparte conocimiento."]
    }
  },
  "Piscis": {
    "symbol": "♓", "dates": "19 Feb — 20 Mar",
    "traits": ["Empatía", "Imaginación", "Sensibilidad"],
    "messages": {
      "amor": ["Detalles tiernos fortalecen el vínculo.", "Pon límites a la idealización.", "Arte y música acercan corazones."],
      "salud": ["Relaja hombros y mandíbula.", "Hidratación consciente hoy.", "Un baño tibio renueva tu ánimo."],
      "dinero": ["Confía en tu intuición y verifica números.", "Creatividad aplicada genera valor.", "Revisa suscripciones innecesarias."],
      "consejo": ["Cuida tu energía emocional.", "Soñar y hacer, no solo soñar.", "Rodéate de calma."]
    }
  }
};
