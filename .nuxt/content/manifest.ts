export const checksums = {
  "about": "v3.5.0--fAQbEqG_l8eVLggsbPlyjz6t1O9IyS1cUL2xPVPAidk",
  "education": "v3.5.0--p9INRpzNFsSy0aAMtyW7NdWgyhdmFFGO7hbU5NkfoNo",
  "repositories": "v3.5.0--a2scndeJSVUTpWl6adh2n7HMSPo0v0R6Eudx7uQLKuU",
  "contact": "v3.5.0--WqXuNUSIVhZ4wmjqVWSnryIXEzmmVGgokFBsBbiMy9M"
}
export const checksumsStructure = {
  "about": "JYd84V2s9Za_s1mClsY2Z_6XzD5W5SHzzbzYENQB8_Q",
  "education": "4faLPhXuWnEhzBPU8gLW2rMg10a7b83ze7nj50rfrh0",
  "repositories": "WeLpcOK2lGLITFKJPO_2aXYymITp6NpXVpVPVBkavVQ",
  "contact": "FC5Hstm0VukwMddOXsnxfP00Zxd2u4s_y5yl5KG0yUQ"
}

export const tables = {
  "about": "_content_about",
  "education": "_content_education",
  "repositories": "_content_repositories",
  "contact": "_content_contact",
  "info": "_content_info"
}

export default {
  "about": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "subtitle": "string"
    }
  },
  "education": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "certifications": "json",
      "description": "string",
      "education": "json",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "skills": "json",
      "stem": "string",
      "subtitle": "string"
    }
  },
  "repositories": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "categories": "json",
      "description": "string",
      "extension": "string",
      "githubStats": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "projects": "json",
      "seo": "json",
      "stem": "string",
      "subtitle": "string"
    }
  },
  "contact": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "availability": "json",
      "body": "json",
      "contactInfo": "json",
      "description": "string",
      "extension": "string",
      "faqs": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "socials": "json",
      "stem": "string",
      "subtitle": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}