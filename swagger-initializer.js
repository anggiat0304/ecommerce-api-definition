window.onload = function() {
    // <editor-fold desc="Changeable Configuration Block">
  
    // Konfigurasi Swagger UI
    const ui = SwaggerUIBundle({
      url: "/swagger.json", // Path ke file YAML atau JSON dengan definisi API
      dom_id: "#swagger-ui",
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      layout: "StandaloneLayout",
      deepLinking: true
    });
  
    // </editor-fold>
  
    // Menginisialisasi Swagger UI
    window.ui = ui;
  };
  