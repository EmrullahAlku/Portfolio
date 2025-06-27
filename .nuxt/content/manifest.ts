export const checksums = {
  "about": "v3.5.0--fAQbEqG_l8eVLggsbPlyjz6t1O9IyS1cUL2xPVPAidk",
  "education": "v3.5.0--ygmoE5hM2or2x-TvmrGMkLwU4eVFXfdVDrGIjbSel0s",
  "repositories": "v3.5.0--y47Cv3VwXNlqZntBe3spWmL2CHZzZxZlc4l7Xn-WK-w",
  "contact": "v3.5.0--anzst1nx-FlW8sBxGV8IMFpc-ubw9b_MZ3mqNZf-ygY",
  "index": "v3.5.0--BLJ0S4kueVlPNIi7FZjnFYjgSJGoemn1Vzt3hC2Nnt0"
}
export const checksumsStructure = {
  "about": "JYd84V2s9Za_s1mClsY2Z_6XzD5W5SHzzbzYENQB8_Q",
  "education": "4faLPhXuWnEhzBPU8gLW2rMg10a7b83ze7nj50rfrh0",
  "repositories": "WeLpcOK2lGLITFKJPO_2aXYymITp6NpXVpVPVBkavVQ",
  "contact": "FC5Hstm0VukwMddOXsnxfP00Zxd2u4s_y5yl5KG0yUQ",
  "index": "pL42xgpINyXPEDjPbEoFKzBvDfpE2XlZyGoh9HCq0L4"
}

export const tables = {
  "about": "_content_about",
  "education": "_content_education",
  "repositories": "_content_repositories",
  "contact": "_content_contact",
  "index": "_content_index",
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
  "index": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "aboutPreview": "json",
      "body": "json",
      "description": "string",
      "extension": "string",
      "hero": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "skills": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}