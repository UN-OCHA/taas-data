# ARCHIVED

This site is no longer used to maintain vocabulary.unocha.org.


# This page is maintained for historical purposes only.

# How to add a new / edit an existing vocabulary on the OCHA Vocabularies website

## Adding a new vocabulary to the website

1. In the taas-data the [GitHub repo](https://github.com/UN-OCHA/taas-data) navigate to the [_vocabs folder](https://github.com/UN-OCHA/taas-data/tree/master/_vocabs)

2. Click 'Create new file'

3. Name your file - the filename should be hyphen seperated and have the .md extension, e.g. my-vocab.md

4. Copy and paste the example vocab below into your new file:

```
---
title: My Vocab
display-title: My Vocab (Beta)
status: JSON available
json-url: https://something.json
gss-url: https://docs.google.com/spreadsheets/something
managed-by: Change me
contact-email: changeme@example.com
---

Your human readable description of the taxonomy goes here.
```

5. Update the file with the relevant details. The top section of the file (the 'front matter') is used to set populate the title and other details of the vocab:
* title - mandatory, the title of the vocab
* display-title - optional, use this if you want to show a different title for the vocab on the website, e.g. adding '(Beta)'
* status: optional, this shows below the header and should describe the status of the vocab
* json-url: optional, the direct link to the JSON file
* gss-url: optional, the direct link to the spreadsheet
* managed-by: optional, the service that manages the vocab
* contact-email: optional, a contact email address for the vocab, if not set it defaults to vocabulary@humanitarianresponse.info

Under the front matter add the description of the vocab, you can use any Markdown formatting (the site uses Kramdown, see this [quick reference](https://kramdown.gettalong.org/quickref.html) for its standard formatting options).

6. Commit your changes 
* give a brief decription of your change
* choose to commit directly to the master branch (this will publish the change to the website immediately)
* or create a new branch and start a pull request if you want someone to review your change before it goes live

## Editing a vocabulary instance on the website

1. In the taas-data the [GitHub repo](https://github.com/UN-OCHA/taas-data) navigate to the [_vocabs folder](https://github.com/UN-OCHA/taas-data/tree/master/_vocabs)

2. Select the vocab you want to edit

3. Click the 'Edit this file' button (pencil icon)

4. Make you changes to the file

5. Commit your changes
* give a brief decription of your change
* either commit directly to the master branch (this will publish the change to the website immediately)
* or create a new branch and start a pull request if you want someone to review your change before it goes live
